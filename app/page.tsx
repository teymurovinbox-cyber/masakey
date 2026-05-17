export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Навигация */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-100">
        <span className="text-2xl font-bold text-gray-900">MasaKey</span>
        <div className="flex items-center gap-4">
          <a href="#features" className="text-gray-500 hover:text-gray-900 text-sm">Возможности</a>
          <a href="#pricing" className="text-gray-500 hover:text-gray-900 text-sm">Цены</a>
          <a href="/login" className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800">
            Войти
          </a>
        </div>
      </nav>

      {/* Герой секция */}
      <section className="flex flex-col items-center justify-center text-center px-8 py-32">
        <div className="inline-block bg-green-50 text-green-700 text-sm px-4 py-1 rounded-full mb-6">
          Система управления для ресторанов
        </div>
        <h1 className="text-5xl font-bold text-gray-900 max-w-3xl leading-tight mb-6">
          Управляйте бронированиями просто и быстро
        </h1>
        <p className="text-xl text-gray-500 max-w-xl mb-10">
          MasaKey — современная платформа для ресторанов. Брони, клиенты, SMS-уведомления и аналитика в одном месте.
        </p>
        <div className="flex gap-4">
          <a href="/login" className="bg-black text-white px-8 py-3 rounded-lg text-base hover:bg-gray-800">
            Начать бесплатно
          </a>
          <a href="#features" className="border border-gray-200 text-gray-700 px-8 py-3 rounded-lg text-base hover:bg-gray-50">
            Узнать больше
          </a>
        </div>
      </section>

      {/* Возможности */}
      <section id="features" className="px-8 py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Всё что нужно ресторану
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl">
              <div className="text-3xl mb-4">📅</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Управление бронями</h3>
              <p className="text-gray-500 text-sm">Создавайте и отслеживайте брони в реальном времени. Статусы, фильтры, поиск.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SMS уведомления</h3>
              <p className="text-gray-500 text-sm">Клиент автоматически получает SMS с подтверждением и ссылкой на карту.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl">
              <div className="text-3xl mb-4">👥</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">База клиентов</h3>
              <p className="text-gray-500 text-sm">История визитов, предпочтения гостей, постоянные клиенты.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Аналитика</h3>
              <p className="text-gray-500 text-sm">Популярные часы, количество броней, загруженность по дням.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl">
              <div className="text-3xl mb-4">🗺️</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Google Maps и Waze</h3>
              <p className="text-gray-500 text-sm">Ссылки на навигацию автоматически в каждом SMS клиенту.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Безопасность</h3>
              <p className="text-gray-500 text-sm">Каждый ресторан видит только свои данные. Защита на уровне базы данных.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Цены */}
      <section id="pricing" className="px-8 py-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Простые цены
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-200 p-8 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Базовый</h3>
              <div className="text-4xl font-bold text-gray-900 mb-1">$29</div>
              <div className="text-gray-500 text-sm mb-8">в месяц</div>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>✓ Неограниченные брони</li>
                <li>✓ SMS уведомления</li>
                <li>✓ База клиентов</li>
                <li>✓ Базовая аналитика</li>
              </ul>
              <a href="/login" className="block text-center mt-8 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
                Начать
              </a>
            </div>
            <div className="border-2 border-black p-8 rounded-2xl relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-3 py-1 rounded-full">
                Популярный
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Про</h3>
              <div className="text-4xl font-bold text-gray-900 mb-1">$49</div>
              <div className="text-gray-500 text-sm mb-8">в месяц</div>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>✓ Всё из Базового</li>
                <li>✓ Расширенная аналитика</li>
                <li>✓ Экспорт данных</li>
                <li>✓ Приоритетная поддержка</li>
              </ul>
              <a href="/login" className="block text-center mt-8 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
                Начать
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="border-t border-gray-100 px-8 py-8 text-center text-gray-400 text-sm">
        © 2026 MasaKey. Все права защищены.
      </footer>
    </main>
  );
}