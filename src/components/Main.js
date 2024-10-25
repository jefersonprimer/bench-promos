// src/components/Main.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

const products = [
  {
    type: 'Notebook',
    postTime: 'há 20 horas',
    name: 'Notebook Acer Aspire 5 Ryzen 5 5500U IPS 16GB Linux',
    image: 'https://benchpromos.com.br/_next/image?url=https%3A%2F%2Fdrive.usercontent.google.com%2Fdownload%3Fid%3D1EJaNytzdYF802QTxBrWADHHDFjAx-ZC9%26authuser%3D0&w=640&q=75',
    specifications: 'Ryzen 5500U - Tela IPS - 60Hz - 16GB DDR4 - 512GB SSD - Linux - Tampa de Metal',
    priceCash: 'R$ 1.999,20',
    priceInstallments: 'ou R$ 1.999,20 em 8x de R$ 249,90',
    purchaseLink: 'https://link-para-compra.com', // Substitua pelo link real
  },
  {
    type: 'Monitor',
    postTime: 'há 20 horas',
    name: 'Monitor Gamer LG 27 Ultragear Full Hd 240hz',
    image: 'https://benchpromos.com.br/_next/image?url=https%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1ha4avcpqv2kT0Ecb9ulsyxPSSQsuqpAY&w=640&q=75',
    specifications: '27" - 100% sRGB - 400nits - 240Hz - 1ms - Ajuste de Altura',
    priceCash: 'R$ 1.259,00',
    priceInstallments: 'ou R$ 1.399,00 em 10x de R$ 139,90',
    purchaseLink: 'https://link-para-compra.com', // Substitua pelo link real
  },
  {
    type: 'Notebook',
    postTime: 'há 20 horas',
    name: 'Galaxy Book4 Intel Inside U300, Windows 11 Home, 8GB',
    image: 'https://benchpromos.com.br/_next/image?url=https%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1cB7qEkHgzumtKKkGL1mUjdFF4mUvMe4J&w=640&q=75',
    specifications: 'Intel U300 (Semelhante ao i3) - Tela IPS - FHD - 8GB (Soldados) - 256GB SSD - Windows 11 Home',
    priceCash: 'R$ 1.999,20',
    priceInstallments: 'ou R$ 1.999,20 em 8x de R$ 249,90',
    purchaseLink: 'https://link-para-compra.com', // Substitua pelo link real
  },
  {
    type: 'Notebook',
    postTime: 'há 20 horas',
    name: 'Galaxy Book4 Intel Inside U300, Windows 11 Home, 8GB',
    image: 'https://benchpromos.com.br/_next/image?url=https%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1cB7qEkHgzumtKKkGL1mUjdFF4mUvMe4J&w=640&q=75',
    specifications: 'Intel U300 (Semelhante ao i3) - Tela IPS - FHD - 8GB (Soldados) - 256GB SSD - Windows 11 Home',
    priceCash: 'R$ 1.999,20',
    priceInstallments: 'ou R$ 1.999,20 em 8x de R$ 249,90',
    purchaseLink: 'https://link-para-compra.com', // Substitua pelo link real
  },
  {
    type: 'Notebook',
    postTime: 'há 20 horas',
    name: 'Galaxy Book4 Intel Inside U300, Windows 11 Home, 8GB',
    image: 'https://benchpromos.com.br/_next/image?url=https%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1cB7qEkHgzumtKKkGL1mUjdFF4mUvMe4J&w=640&q=75',
    specifications: 'Intel U300 (Semelhante ao i3) - Tela IPS - FHD - 8GB (Soldados) - 256GB SSD - Windows 11 Home',
    priceCash: 'R$ 1.999,20',
    priceInstallments: 'ou R$ 1.999,20 em 8x de R$ 249,90',
    purchaseLink: 'https://link-para-compra.com', // Substitua pelo link real
  },
  {
    type: 'Notebook',
    postTime: 'há 20 horas',
    name: 'Galaxy Book4 Intel Inside U300, Windows 11 Home, 8GB',
    image: 'https://benchpromos.com.br/_next/image?url=https%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1cB7qEkHgzumtKKkGL1mUjdFF4mUvMe4J&w=640&q=75',
    specifications: 'Intel U300 (Semelhante ao i3) - Tela IPS - FHD - 8GB (Soldados) - 256GB SSD - Windows 11 Home',
    priceCash: 'R$ 1.999,20',
    priceInstallments: 'ou R$ 1.999,20 em 8x de R$ 249,90',
    purchaseLink: 'https://link-para-compra.com', // Substitua pelo link real
  },
  {
    type: 'Notebook',
    postTime: 'há 20 horas',
    name: 'Galaxy Book4 Intel Inside U300, Windows 11 Home, 8GB',
    image: 'https://benchpromos.com.br/_next/image?url=https%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1cB7qEkHgzumtKKkGL1mUjdFF4mUvMe4J&w=640&q=75',
    specifications: 'Intel U300 (Semelhante ao i3) - Tela IPS - FHD - 8GB (Soldados) - 256GB SSD - Windows 11 Home',
    priceCash: 'R$ 1.999,20',
    priceInstallments: 'ou R$ 1.999,20 em 8x de R$ 249,90',
    purchaseLink: 'https://link-para-compra.com', // Substitua pelo link real
  },
  {
    type: 'Notebook',
    postTime: 'há 20 horas',
    name: 'Galaxy Book4 Intel Inside U300, Windows 11 Home, 8GB',
    image: 'https://benchpromos.com.br/_next/image?url=https%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1cB7qEkHgzumtKKkGL1mUjdFF4mUvMe4J&w=640&q=75',
    specifications: 'Intel U300 (Semelhante ao i3) - Tela IPS - FHD - 8GB (Soldados) - 256GB SSD - Windows 11 Home',
    priceCash: 'R$ 1.999,20',
    priceInstallments: 'ou R$ 1.999,20 em 8x de R$ 249,90',
    purchaseLink: 'https://link-para-compra.com', // Substitua pelo link real
  }
  // Adicione mais produtos conforme necessário (total de pelo menos 8 para ver o efeito)
];

const Main = () => {
  return (
    <Container style={{ marginTop: '80px' }}>
      <Row>
        {products.map((product, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Main;
