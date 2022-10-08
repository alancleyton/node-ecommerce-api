import slugify from '../../../src/utils/slugify';

describe('Slugify', () => {
  it('should output a text slug', () => {
    const slug = slugify('Bolsa Feminina Preta e Elegante');
    expect(slug).toBe('bolsa-feminina-preta-e-elegante');
  });

  it('should output a text slug without special characters', () => {
    const slug = slugify('Cartão de Memória Micro SD 16gb /32gb /64gb');
    expect(slug).toBe('cartao-de-memoria-micro-sd-16gb-32gb-64gb');
  });
});
