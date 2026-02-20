import { PrismaClient } from '@prisma/client';
import martiniGuide from '../src/content/martini-guide';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding Martini Service Guide...');

  await prisma.activity.upsert({
    where: { id: 'martini-service-guide' },
    update: {
      category: 'cocktails',
      isReleased: true,
      content: JSON.stringify(martiniGuide),
    },
    create: {
      id: 'martini-service-guide',
      title: 'Martini Service Guide',
      description: 'Learn the essential questions to ask guests about their martini preferences. A practical decision tree for servers and server assistants to master martini service.',
      type: 'guide',
      category: 'cocktails',
      isReleased: true,
      content: JSON.stringify(martiniGuide),
    }
  });

  console.log('✅ Martini Service Guide seeded successfully');
  await prisma.$disconnect();
}

main()
  .catch((error) => {
    console.error('❌ Seed failed:', error);
    process.exit(1);
  });
