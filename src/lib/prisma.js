import { PrismaClient as PrismaClientAdmin } from '../../prisma/admin';
import { PrismaClient as PrismaClientSeller } from '../../prisma/seller';
import { PrismaClient as PrismaClientCustomer } from '../../prisma/customer';

const prismaAdmin = global.prismaAdmin || new PrismaClientAdmin();
const prismaSeller = global.prismaSeller || new PrismaClientSeller();
const prismaCustomer = global.prismaCustomer || new PrismaClientCustomer();

if (process.env.NODE_ENV !== 'production') {
  global.prismaAdmin = prismaAdmin;
  global.prismaSeller = prismaSeller;
  global.prismaCustomer = prismaCustomer;
}

export { prismaAdmin, prismaSeller, prismaCustomer };

