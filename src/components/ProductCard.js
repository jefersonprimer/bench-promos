import React, { useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import styles from './ProductCard.module.css'; // Importando o CSS Module

const ProductCard = ({ product }) => {
  const [showCoupon, setShowCoupon] = useState(false);

  const handleCouponToggle = () => {
    setShowCoupon(!showCoupon);
  };

  return (
    <Card className={`mb-4 ${styles.card}`}>
      <Card.Body className={`${styles.cardBody} d-flex flex-column`}>
        <Row>
          <Col>
            <span className={styles.productType}>{product.type}</span>
          </Col>
          <Col className="text-end">
            <span>{product.postTime}</span>
          </Col>
        </Row>
        <h5 className={`mt-3 text-start ${styles.productName}`}>{product.name}</h5>
        
        <img 
          src={product.image} 
          alt={product.name} 
          className={`${styles.image} img-fluid`}
        />
        
        <div className="text-start mt-1">
          <p>{product.specifications}</p>
          <p>
           <span className={styles.priceCash}>{product.priceCash}</span> à vista
          </p>
          <p className={styles.priceInstallments}>{product.priceInstallments}</p>
        </div>

        <Button variant="secondary" onClick={handleCouponToggle} className={`${styles.btnCupom} me-2`}>
          {showCoupon ? 'Fechar Cupom' : 'Cupom Disponível'}
        </Button>

        {showCoupon && (
          <div className={`${styles.couponModal} mt-1`}>
            <p>Cupom: PROMO2023</p>
          </div>
        )}

        <div className="mt-2">
          <Button className={`${styles.btnAcessar} me-2`} variant="primary" href={product.purchaseLink} target="_blank">
            Acessar
          </Button>
        </div>

        {/* Ícones SVG fixados no fundo */}
        <div className={`${styles.divIcon} d-flex justify-content-between mt-auto`}>
          <div className="flex flex-wrap gap-1">
            <button type="button" className={`${styles.svgIcon} inline-flex items-center justify-center`}>
              👍
            </button>
            <button type="button" className={`${styles.svgIcon} inline-flex items-center justify-center`}>
              👎
            </button>
            <button type="button" className={`${styles.svgIcon} inline-flex items-center justify-center`}>
              🔥
            </button>
            <button type="button" className={`${styles.svgIcon} inline-flex items-center justify-center`}>
              ❤️
            </button>
          </div>
          <a className={`${styles.svgMessageNumber} inline-flex items-center justify-center`} href="/promocao/monitor-gamer-lg-ultragear-27-full-hd-ips-180hz-99-srgb/cm266adaj001eb80i0q9t9e8u#comments">
            <span className="mr-1 text-sm">0</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${styles.svgMessage} lucide lucide-message-circle h-4 w-4`}>
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
            </svg>
          </a>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
