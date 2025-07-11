import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const quotes = [
    {
      character: "Максим Лавров",
      text: "Кухня - это не просто место, где готовят еду. Это поле боя, где каждый день - битва за совершенство. Повар - это не профессия, это призвание! И если ты не готов биться до последнего за каждое блюдо, то тебе не место в Клод Моне!",
      role: "Шеф-повар",
    },
    {
      character: "Виктор Батурин",
      text: "Знаете, в чем секрет успешного ресторана? Не в богатом интерьере, не в рекламе и даже не в ценах. Секрет - в людях, которые отдают сердце своему делу. Когда ты любишь то, что делаешь, гости это чувствуют. Они возвращаются не просто за вкусной едой, а за атмосферой счастья.",
      role: "Владелец ресторана",
    },
    {
      character: "Настя Заворотнюк",
      text: "Мужчины с утра отправляются на работу, чтобы добывать деньги на еду, а мы, женщины, стоим здесь и создаём те самые чудеса, ради которых они хотят вернуться домой. Для меня ресторан - это не работа, это сцена, где каждый день я создаю маленькие спектакли и дарю людям счастье.",
      role: "Официантка",
    },
    {
      character: "Дмитрий Нагиев",
      text: "Готовить - это как любить: либо с головой, либо вообще не стоит браться! Нельзя сделать что-то великое половиной сердца. Либо ты влюбляешься в каждый томат, в каждый листик базилика, в каждую специю, либо ты не повар. Когда я готовлю, я должен чувствовать сердцебиение своего блюда!",
      role: "Су-шеф",
    },
    {
      character: "Артур Пирожков",
      text: "Доброе утро, солнце моё! Каждый новый день в нашей кухне - это новые возможности, новые вкусы, новые истории! Может быть, я слишком оптимистичен? Нет! Не бывает слишком много хорошего настроения! А вы знаете, что самые вкусные блюда получаются только у счастливых поваров!",
      role: "Повар-заставник",
    },
    {
      character: "Ольга Семеновна Шувалова",
      text: "Молодые люди сегодня странные. Они думают, что успех приходит сразу, а счастье можно купить в магазине. Ошибаются! Настоящий ресторан, как и настоящая семья, строится годами. Много слёз, много труда, много открытых сердец. Но результат... Результат стоит всего!",
      role: "Мать Виктора",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="ChefHat" size={40} className="text-white" />
              <h1 className="text-4xl font-bold font-montserrat">КУХНЯ</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a
                href="#about"
                className="hover:text-orange-200 transition-colors font-medium"
              >
                О проекте
              </a>
              <a
                href="#quotes"
                className="hover:text-orange-200 transition-colors font-medium"
              >
                Цитаты
              </a>
              <a
                href="#gallery"
                className="hover:text-orange-200 transition-colors font-medium"
              >
                Галерея
              </a>
              <a
                href="#contact"
                className="hover:text-orange-200 transition-colors font-medium"
              >
                Контакты
              </a>
            </nav>
            <Icon name="Menu" size={24} className="md:hidden cursor-pointer" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-6xl font-bold text-gray-800 mb-6 font-montserrat">
              Добро пожаловать в мир
              <span className="text-orange-500 block mt-2">КУХНИ</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Культовый российский сериал о жизни ресторана "Клод Моне", где
              каждый день полон драм, комедий и незабываемых моментов
            </p>
            <div className="flex justify-center space-x-4">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold"
              >
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть трейлер
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-3 rounded-full font-semibold"
              >
                <Icon name="BookOpen" size={20} className="mr-2" />
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">6</div>
              <div className="text-gray-600">Сезонов</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">120</div>
              <div className="text-gray-600">Серий</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">
                2012
              </div>
              <div className="text-gray-600">Год премьеры</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">∞</div>
              <div className="text-gray-600">Фанатов</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quotes Section */}
      <section id="quotes" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-800 mb-4 font-montserrat">
              Легендарные цитаты
            </h3>
            <p className="text-xl text-gray-600">
              Самые запоминающиеся фразы из сериала
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {quotes.map((quote, index) => (
              <Card
                key={index}
                className="bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                      <Icon name="User" size={24} className="text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-gray-800">
                        {quote.character}
                      </CardTitle>
                      <Badge
                        variant="secondary"
                        className="bg-orange-100 text-orange-700"
                      >
                        {quote.role}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-gray-700 italic text-lg leading-relaxed">
                    "{quote.text}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section
        id="gallery"
        className="py-20 px-4 bg-gradient-to-r from-orange-100 to-amber-100"
      >
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-800 mb-4 font-montserrat">
              Галерея моментов
            </h3>
            <p className="text-xl text-gray-600">
              Незабываемые кадры из сериала
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card
                key={item}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-video bg-gradient-to-br from-orange-200 to-amber-200 flex items-center justify-center">
                  <Icon name="Camera" size={48} className="text-orange-500" />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Эпизод {item}
                  </h4>
                  <p className="text-sm text-gray-600">
                    Описание памятного момента из серии
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-4xl font-bold text-gray-800 mb-4 font-montserrat">
              Фан-зона
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Поделитесь своими впечатлениями о сериале
            </p>
            <Card className="bg-gradient-to-br from-orange-50 to-amber-50">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ваше имя
                    </label>
                    <Input placeholder="Как вас зовут?" className="bg-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="bg-white"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ваша любимая цитата
                  </label>
                  <Textarea
                    placeholder="Поделитесь своей любимой цитатой из сериала..."
                    className="bg-white"
                    rows={4}
                  />
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="ChefHat" size={32} className="text-orange-500" />
                <h4 className="text-2xl font-bold font-montserrat">КУХНЯ</h4>
              </div>
              <p className="text-gray-400">
                Официальный фанатский сайт культового сериала
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Разделы</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#about"
                    className="hover:text-orange-400 transition-colors"
                  >
                    О проекте
                  </a>
                </li>
                <li>
                  <a
                    href="#quotes"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Цитаты
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Галерея
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Социальные сети</h5>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-orange-400"
                >
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-orange-400"
                >
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-orange-400"
                >
                  <Icon name="Twitter" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Кухня Фан-сайт. Создано с любовью к сериалу.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
