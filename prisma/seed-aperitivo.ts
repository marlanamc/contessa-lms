import { PrismaClient } from '@prisma/client';
import { aperitivoGuide } from '../src/content/aperitivo-guide';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding Aperitivo Guide...');

  await prisma.activity.upsert({
    where: { id: 'aperitivo-guide' },
    update: {
      category: 'cocktails',
      isReleased: true,
      content: JSON.stringify(aperitivoGuide),
    },
    create: {
      id: 'aperitivo-guide',
      title: 'Aperitivo Guide',
      description: 'Master the art and craft of aperitivo service: traditions, spirits, cocktails, and pairing with food for fine dining.',
      type: 'guide',
      category: 'cocktails',
      isReleased: true,
      content: JSON.stringify(aperitivoGuide),
    }
  });

  console.log('✅ Aperitivo Guide seeded successfully');
  await prisma.$disconnect();
}

main()
  .catch((error) => {
    console.error('❌ Seed failed:', error);
    process.exit(1);
  });
