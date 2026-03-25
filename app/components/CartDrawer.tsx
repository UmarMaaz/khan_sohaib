'use client';

import { useCart } from '../context/CartContext';
import { useEffect, useState } from 'react';

export default function CartDrawer() {
  const { isCartOpen, toggleCart, cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
  const [showEasypaisaModal, setShowEasypaisaModal] = useState(false);

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setShowEasypaisaModal(false); // Reset when closed
    }
  }, [isCartOpen]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("03235921798");
      alert("Number copied to clipboard!");
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleCheckout = (method: 'WhatsApp' | 'Easypaisa') => {
    const phoneNumber = "923235921798";
    let message = `Hello Khan Sohaib! I would like to place an order (Payment Method: ${method}):\n\n`;
    
    cartItems.forEach(item => {
      message += `▪ *${item.quantity}x* ${item.name} — ${item.price * item.quantity} PKR\n`;
    });
    
    message += `\n*TOTAL: ${cartTotal} PKR*`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`, '_blank');
  };

  if (!isCartOpen) return null;

  return (
    <>
      <div className="cart-backdrop" onClick={toggleCart}></div>
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>{showEasypaisaModal ? "Easypaisa Payment" : "Your Cart"}</h2>
          <button className="cart-close" onClick={() => {
            if (showEasypaisaModal) {
              setShowEasypaisaModal(false);
            } else {
              toggleCart();
            }
          }}>
            <i className={showEasypaisaModal ? "fa-solid fa-arrow-left" : "fa-solid fa-times"}></i>
          </button>
        </div>
        
        {!showEasypaisaModal ? (
          <>
            <div className="cart-items">
              {cartItems.length === 0 ? (
                <p className="cart-empty">Your cart is empty.</p>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.img} alt={item.name} className="cart-item-img" />
                    <div className="cart-item-details">
                      <h4>{item.name}</h4>
                      <p className="cart-item-price">{item.price} PKR</p>
                      <div className="cart-item-qty">
                        <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                      </div>
                    </div>
                    <button className="cart-item-remove" onClick={() => removeFromCart(item.id)}>
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="cart-footer">
                <div className="cart-total">
                  <span>Total</span>
                  <span>{cartTotal} PKR</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <button 
                    className="btn btn-solid checkout-btn ripple-btn" 
                    style={{ background: '#00b14f', color: '#fff', border: 'none' }}
                    onClick={() => setShowEasypaisaModal(true)}
                  >
                    Checkout via Easypaisa
                  </button>
                  <button 
                    className="btn btn-outline checkout-btn ripple-btn" 
                    onClick={() => handleCheckout('WhatsApp')}
                  >
                    Checkout via WhatsApp
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="cart-items" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '2rem' }}>
            <p style={{ color: 'var(--cream-dim)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Please transfer exactly <strong>{cartTotal} PKR</strong> to the following Easypaisa account, then confirm your order via WhatsApp.
            </p>

            <div style={{ background: 'rgba(197,160,40,0.05)', border: '1px solid rgba(197,160,40,0.2)', padding: '1.5rem', borderRadius: '8px' }}>
              <p style={{ fontSize: '0.75rem', color: 'var(--cream-dim)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.3rem' }}>Account Title</p>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', color: 'var(--cream)', marginBottom: '1.2rem' }}>Khan Sohaib</h3>
              
              <p style={{ fontSize: '0.75rem', color: 'var(--cream-dim)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.3rem' }}>Account Number</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--surface)', border: '1px solid rgba(197,160,40,0.2)', padding: '0.8rem 1rem', borderRadius: '4px' }}>
                <span className="cart-item-price" style={{ fontSize: '1.1rem', margin: 0, letterSpacing: '0.1em' }}>0323 592 1798</span>
                <button onClick={copyToClipboard} style={{ background: 'none', border: 'none', color: 'var(--gold)', cursor: 'pointer', fontSize: '1.1rem' }}>
                  <i className="fa-regular fa-copy"></i>
                </button>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: 'auto' }}>
              <a 
                href="easypaisa://"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-solid checkout-btn ripple-btn" 
                style={{ background: '#00b14f', color: '#fff', border: 'none', textDecoration: 'none' }}
              >
                Open Easypaisa App <i className="fa-solid fa-arrow-up-right-from-square" style={{ marginLeft: '8px', fontSize: '0.8rem' }}></i>
              </a>
              <button 
                className="btn btn-outline checkout-btn ripple-btn" 
                style={{ borderColor: 'var(--gold)', color: 'var(--gold)', background: 'transparent' }}
                onClick={() => handleCheckout('Easypaisa')}
              >
                I&apos;ve Paid! Send Order <i className="fab fa-whatsapp" style={{ marginLeft: '8px', fontSize: '1rem' }}></i>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
