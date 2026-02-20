import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { martiniBasicsDeluxe } from '../src/content/martini-basics-deluxe';
import martiniGuide from '../src/content/martini-guide';

const prisma = new PrismaClient();
const BCRYPT_ROUNDS = 12;

async function main() {
  console.log('Creating Contessa LMS starter data...');

  const passwordHash = await bcrypt.hash('change-me-now', BCRYPT_ROUNDS);

  const owner = await prisma.user.upsert({
    where: { username: 'contessa_owner' },
    update: {
      name: 'Contessa Owner',
      password: passwordHash,
      role: 'student',
      mustChangePassword: true,
    },
    create: {
      username: 'contessa_owner',
      name: 'Contessa Owner',
      password: passwordHash,
      role: 'student',
      mustChangePassword: true,
    },
  });

  await prisma.activity.upsert({
    where: { id: 'martini-basics' },
    update: {
      category: 'cocktails',
      isReleased: true,
      content: JSON.stringify(martiniBasicsDeluxe),
    },
    create: {
      id: 'martini-basics',
      title: 'Martini Basics',
      description: 'Master the art and craft of the classic Martini: preparation, technique, variations, and service excellence for fine dining.',
      type: 'guide',
      category: 'cocktails',
      isReleased: true,
      content: JSON.stringify(martiniBasicsDeluxe),
    }
  });

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

  console.log('✅ Created owner account');
  console.log(`   username: ${owner.username}`);
  console.log('   password: change-me-now');
  console.log('   role: student');
  console.log('');
  console.log('✅ Created Martini Basics Guide (Activity ID: martini-basics)');
  console.log('✅ Created Martini Service Guide (Activity ID: martini-service-guide)');
  console.log('');
}

main()
  .catch((error) => {
    console.error('❌ Seed failed:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
