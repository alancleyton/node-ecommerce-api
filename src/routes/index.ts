import { Router } from 'express';
import productRoutes from '../resources/product/product-router';

const router = Router();

router.use('/products', productRoutes);

export default router;
