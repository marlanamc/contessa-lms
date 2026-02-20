import { PrismaClient } from '@prisma/client';
import { martiniBasicsEnhanced } from '../src/content/martini-basics-enhanced';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding enhanced Martini Basics guide...');

  await prisma.activity.upsert({
    where: { id: 'martini-basics' },
    update: {
      category: 'cocktails',
      isReleased: true,
      content: JSON.stringify(martiniBasicsEnhanced),
    },
    create: {
      id: 'martini-basics',
      title: 'Martini Basics',
      description: 'Master the art and craft of the classic Martini: preparation, technique, variations, and service excellence for fine dining.',
      type: 'guide',
      category: 'cocktails',
      isReleased: true,
      content: JSON.stringify(martiniBasicsEnhanced),
    }
  });

  console.log('✅ Martini Basics (Enhanced) seeded successfully');
  await prisma.$disconnect();
}

main()
  .catch((error) => {
    console.error('❌ Seed failed:', error);
    process.exit(1);
  });
