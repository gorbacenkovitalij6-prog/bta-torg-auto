'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Award, Users, Target, Briefcase, Send } from 'lucide-react';

export default function TeamPage() {
  const team = [
    {
      firstName: 'Евгений',
      lastName: 'Черных',
      position: 'Старший менеджер',
      description: '7 лет в сфере автоподбора, более 150 автомобилей, подобранных и доставленных клиентам под ключ. Руководит отделом продаж и координирует работу команды.',
      telegram: 'https://t.me/btatorg',
      image: 'https://i.ibb.co/jvHzns7B/image-2026-02-09-10-37-04.png',
    },
    {
      firstName: 'Артём',
      lastName: 'Смирнов',
      position: 'Менеджер',
      description: '5 лет помогаю клиентам безопасно купить авто. Более 83 машин, доставленных и оформленных "под ключ", каждый проект — под личным контролем.',
      telegram: 'https://t.me/btatorg',
      image: 'https://i.ibb.co/xqkh8Lpb/image-2026-02-09-10-37-30.png',
    },
    {
      firstName: 'Александр',
      lastName: 'Зубенко',
      position: 'Менеджер',
      description: 'Организует подбор, доставку и таможенное оформление. 4 года опыта в международных перевозках, более 60 успешных сделок.',
      telegram: 'https://t.me/btatorg',
      image: 'https://i.ibb.co/F4t2VdQP/image-2026-02-09-10-38-00.png',
    },
    {
      firstName: 'Иван',
      lastName: 'Луганов',
      position: 'Менеджер',
      description: '4 года занимаюсь автопригоном под ключ: от поиска и торгов до растаможки и постановки на учёт. Более 70 довольных клиентов.',
      telegram: 'https://t.me/btatorg',
      image: 'https://i.ibb.co/8LD7jLQZ/image-2026-02-09-10-38-43.png',
    },
    {
      firstName: 'Андрей',
      lastName: 'Мальцев',
      position: 'Менеджер',
      description: '6 лет опыта в автобизнесе. Специализируюсь на премиум-сегменте: Mercedes, BMW, Audi. Организовал доставку более 90 автомобилей из Европы.',
      telegram: 'https://t.me/btatorg',
      image: 'https://i.ibb.co/nNDJGG2R/image-2026-02-09-10-39-30.png',
    },
    {
      firstName: 'Алексей',
      lastName: 'Лобанов',
      position: 'Менеджер',
      description: '3 года строю для клиентов комфортный путь к своему автомобилю. Более 50 машин под ключ, каждый этап — под моим контролем от А до Я.',
      telegram: 'https://t.me/btatorg',
      image: 'https://i.ibb.co/GvVr9fGn/image-2026-02-09-10-39-54.png',
    },
    {
      firstName: 'Сергей',
      lastName: 'Перцев',
      position: 'Менеджер',
      description: '5 лет в автоподборе. Эксперт по внедорожникам и кроссоверам. Помог приобрести более 80 автомобилей с европейских аукционов и дилеров.',
      telegram: 'https://t.me/btatorg',
      image: 'https://i.ibb.co/zzRMKDq/image-2026-02-09-10-40-43.png',
    },
    {
      firstName: 'Михаил',
      lastName: 'Попов',
      position: 'Менеджер',
      description: '4 года в сфере международных автоперевозок. Специализация — юридическое сопровождение и таможенное оформление. Более 65 успешных проектов.',
      telegram: 'https://t.me/btatorg',
      image: 'https://i.ibb.co/Gm3Jb7x/image-2026-02-09-10-41-01.png',
    },
    {
      firstName: 'Михаил',
      lastName: 'Попов',
      position: 'Менеджер',
      description: '3 года опыта работы с немецкими и французскими автобиржами. Организую полный цикл: от выбора до регистрации в ГИБДД. 55+ довольных клиентов.',
      telegram: 'https://t.me/btatorg',
      image: 'https://i.ibb.co/kVTJQDjZ/image-2026-02-09-10-41-28.png',
    },
    {
      firstName: 'Роман',
      lastName: 'Маслов',
      position: 'Менеджер',
      description: '5 лет в автоподборе. Работаю с проверенными партнёрами по всей Европе. Более 75 автомобилей доставлено и оформлено без скрытых проблем и рисков.',
      telegram: 'https://t.me/btatorg',
      image: 'https://i.ibb.co/8LC3N8fQ/image-2026-02-09-10-42-14.png',
    },
  ];

  const departments = [
    {
      icon: Users,
      title: 'Отдел продаж',
      count: '10 специалистов',
      description: 'Консультируют клиентов и помогают с выбором автомобиля',
    },
    {
      icon: Target,
      title: 'Отдел закупок',
      count: '6 экспертов',
      description: 'Ищут и проверяют автомобили на европейских площадках',
    },
    {
      icon: Briefcase,
      title: 'Юридический отдел',
      count: '4 юриста',
      description: 'Оформляют документы и сопровождают сделки',
    },
    {
      icon: Award,
      title: 'Служба качества',
      count: '5 сотрудников',
      description: 'Контролируют качество на всех этапах',
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Наша команда</h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Профессионалы с многолетним опытом, которые помогут вам найти и купить идеальный автомобиль из Европы
            </p>
          </motion.div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all"
              >
                <dept.icon className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">{dept.title}</h3>
                <div className="text-sm text-indigo-600 font-semibold mb-2">{dept.count}</div>
                <p className="text-sm text-gray-600">{dept.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Ключевые специалисты</h2>
            <p className="text-lg text-gray-600">
              Познакомьтесь с людьми, которые делают возможным вашу покупку
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 items-start">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-indigo-200 hover:shadow-xl transition-all group flex flex-col h-full"
              >
                {/* Avatar */}
                <div className="w-24 h-24 rounded-2xl overflow-hidden mb-6 mx-auto group-hover:scale-110 transition-transform shadow-lg">
                  <Image
                    src={member.image}
                    alt={`${member.firstName} ${member.lastName}`}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Info */}
                <div className="text-center mb-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2 leading-tight">
                    <div>{member.firstName}</div>
                    <div>{member.lastName}</div>
                  </h3>
                  <p className="text-indigo-600 font-semibold mb-4">{member.position}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {member.description}
                  </p>
                </div>

                {/* Telegram Contact */}
                <div className="pt-6 border-t border-gray-100 mt-auto">
                  <a
                    href={member.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-[#0088cc] hover:bg-[#0077b5] text-white py-3 px-4 rounded-xl font-medium transition-all shadow-md hover:shadow-lg group"
                  >
                    <Send className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                    <span>Связаться</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Хотите присоединиться к нашей команде?</h2>
            <p className="text-xl text-indigo-100 mb-8">
              Мы всегда ищем талантливых и мотивированных специалистов, которые разделяют наши ценности и хотят развиваться в автомобильной индустрии
            </p>
            <a
              href="mailto:hr@btatorg.ru"
              className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:scale-105 inline-block"
            >
              Отправить резюме →
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
