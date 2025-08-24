'use client'
import { useState } from 'react'
import WorkCard from './WorkCard';
import WorkModalCard from './WorkModalCard';
import { FloatingDots } from './BgFloatingDots';
import Link from 'next/link';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';

export interface WorkModalLink {
  img: string
  url: string
}

export interface WorkModalData {
  title: string
  desc: string
  roles: string[]
  stack: string[]
  logo: string
  links: WorkModalLink[]
}

const montserrat = Montserrat({
  subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext'],
  style: ['normal', 'italic'],
})

export default function Home() {
  const [modalActive, setModalActive] = useState(false)
  const [modalData, setModalData] = useState<WorkModalData>()

  return (
    <>
      <div className='inset-0 absolute -z-1'>
        <span className='fixed inset-x-1/5 inset-y-1/4 w-1/4 aspect-square rounded-full bg-fuchsia-900/50 blur-[15vh]' />
        <span className='fixed inset-x-2/3 inset-y-1/7 w-1/6 aspect-square rounded-full bg-fuchsia-900/50 blur-[15vh]' />
        <FloatingDots count={150} velMul={0.25} />
      </div>

      <div className='flex flex-col items-center justify-center p-4 mx-auto mt-5 bg-neutral-800 rounded-2xl w-2/3 sm:w-1/2 lg:w-1/3 xl:w-1/4 border border-white/25'>
        <h1 className={`text-md sm:text-xl md:text-2xl text-center mt-5 font-medium ${montserrat.className}`}>Иван Щетинский</h1>
        <p className={`italic text-neutral-300 text-xs sm:text-sm md:text-md text-center mt-5 font-normal ${montserrat.className}`}>Разработчик с 6-летним опытом самостоятельной работы над pet-проектами. Создавал игры, приложения и веб-сервисы с использованием Godot 4, Node.js, Next.js, PHP, TypeScript и Electron. Интересуюсь разработкой игр и современных веб-технологий, постоянно развиваю навыки и осваиваю новые инструменты</p>
        <br></br>
        <div className='flex items-center justify-center gap-10'>
          <Link href={'https://github.com/qurs'} target='_blank'>
            <Image className='hover:drop-shadow-[0_0_8px_#a776b8aa]' src={'/portfolio/github-mark-white.svg'} alt='' width={32} height={32} />
          </Link>
          <Link href={'https://t.me/vankuver11'} target='_blank'>
            <Image className='hover:drop-shadow-[0_0_8px_#a776b8aa]' src={'/portfolio/telegram.svg'} alt='' width={32} height={32} />
          </Link>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center p-4 mx-auto mt-5 bg-neutral-800 rounded-2xl w-2/3 sm:w-1/2 lg:w-1/3 xl:w-1/4 border border-white/25'>
        <h1 className={`text-sm sm:text-xl md:text-2xl text-center mt-5 font-medium ${montserrat.className}`}>Веб-сайт был создан с помощью Next.JS + TailwindCSS</h1>
        <br></br>
        <div className='flex items-center justify-center gap-10'>
          <Link href={'https://github.com/qurs/portfolio'} target='_blank'>
            <Image className='hover:drop-shadow-[0_0_8px_#a776b8aa]' src={'/portfolio/github-mark-white.svg'} alt='' width={32} height={32} />
          </Link>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center p-4 mx-auto mt-5 bg-neutral-800 rounded-2xl w-2/3 sm:w-1/2 lg:w-1/3 xl:w-1/4 border border-white/25'>
        <h1 className={`mb-3 text-sm sm:text-md md:text-lg text-center font-medium ${montserrat.className}`}>Стек, с которым я работал:</h1>
        <ul className='self-start list-disc ml-6'>
          <li className={`font-medium md:font-bold text-xs md:text-sm ${montserrat.className}`}>Docker</li>
          <li className={`font-medium md:font-bold text-xs md:text-sm ${montserrat.className}`}>Git</li>
          <li className={`font-medium md:font-bold text-xs md:text-sm ${montserrat.className}`}>Luvit</li>
          <li className={`font-medium md:font-bold text-xs md:text-sm ${montserrat.className}`}>LuaJIT</li>
          <li className={`font-medium md:font-bold text-xs md:text-sm ${montserrat.className}`}>Love2D</li>
          <li className={`font-medium md:font-bold text-xs md:text-sm ${montserrat.className}`}>Godot 4</li>
          <li className={`font-medium md:font-bold text-xs md:text-sm ${montserrat.className}`}>Node.JS</li>
          <li className={`font-medium md:font-bold text-xs md:text-sm ${montserrat.className}`}>Electron</li>
          <li className={`font-medium md:font-bold text-xs md:text-sm ${montserrat.className}`}>Next.JS</li>
          <li className={`font-medium md:font-bold text-xs md:text-sm ${montserrat.className}`}>TailwindCSS</li>
          <li className={`font-medium md:font-bold text-xs md:text-sm ${montserrat.className}`}>Spigot</li>
          <li className={`font-medium md:font-bold text-xs md:text-sm ${montserrat.className}`}>MySQL</li>
          <li className={`font-medium md:font-bold text-xs md:text-sm ${montserrat.className}`}>Garry&apos;s Mod</li>
          <li className={`font-medium md:font-bold text-xs md:text-sm ${montserrat.className}`}>Windows Forms</li>
          <li className={`font-medium md:font-bold text-xs md:text-sm ${montserrat.className}`}>Lua</li>
          <li className={`font-medium md:font-bold text-xs md:text-sm ${montserrat.className}`}>JavaScript</li>
          <li className={`font-medium md:font-bold text-xs md:text-sm ${montserrat.className}`}>TypeScript</li>
          <li className={`font-medium md:font-bold text-xs md:text-sm ${montserrat.className}`}>Java</li>
          <li className={`font-medium md:font-bold text-xs md:text-sm ${montserrat.className}`}>C#</li>
          <li className={`font-medium md:font-bold text-xs md:text-sm ${montserrat.className}`}>Python</li>
          <li className={`font-medium md:font-bold text-xs md:text-sm ${montserrat.className}`}>GDScript</li>
          <li className={`font-medium md:font-bold text-xs md:text-sm ${montserrat.className}`}>ImGui</li>
          <li className={`font-medium md:font-bold text-xs md:text-sm ${montserrat.className}`}>HTML</li>
          <li className={`font-medium md:font-bold text-xs md:text-sm ${montserrat.className}`}>CSS</li>
          <li className={`font-medium md:font-bold text-xs md:text-sm ${montserrat.className}`}>PHP</li>
        </ul>
      </div>

      <div className='container p-5 pb-15 mx-auto mt-5 mb-5 bg-radial from-neutral-800 to-neutral-900/80 rounded-2xl w-3/4 border border-white/25'>
        <h1 className={`text-2xl sm:text-4xl md:text-5xl text-center ${montserrat.className} font-medium mt-5`}>Мои работы</h1>

        <hr className='mt-10 mb-10 ml-10 mr-10 opacity-50'></hr>

        <div className='grid lg:grid-cols-1 lg:grid-rows-3 xl:grid-cols-3 xl:grid-rows-1 mt-10 sm:gap-1 md:gap-1 lg:gap-5 justify-center'>
          <WorkCard
            title='NationForge (2024) (Pet-project)'
            desc={'2D стратегия-песочница в реальном времени на Love2D. Реализованы генерация карты, создание государств, управление ресурсами и юнитами, войны, битвы и колонизация. Проект находится в заморозке.'}
            fullDesc={'NationForge — 2D стратегия-песочница в реальном времени на Love2D. В проекте реализованы:\nГлавное меню и интерфейс\nГенерация карты мира и провинций (по аналогии с Hearts of Iron 4) в отдельном потоке\nСоздание государства (название, цвет, столица, столичный регион)\nУправление людскими ресурсами и мобилизация для боевых юнитов\nРазделение, создание и удаление регионов\nОбъявление войн и проведение битв между юнитами\nЗахват государств и колонизация диких земель\nРадиальное меню, система событий и уведомлений\n\nПроект остаётся в разработке, большая часть механик реализована, но завершение работы временно приостановлено.'}
            logo='/portfolio/nationforge.png'
            logoSize={128}
            roles={['Разработчик игры']}
            stack={['Lua', 'Love2D', 'ImGui', 'Github CI/CD']}
            links={[ {img: '/portfolio/github-mark-white.svg', url: 'https://github.com/qurs/new-strat'} ]}
            setModalActive={setModalActive}
            setModalData={setModalData}
          />

          <WorkCard
            title='Triangle Union (2020) (Pet-project)'
            desc={'Triangle Union — игровой проект в Garry’s Mod. Создан и поддерживался мной как основателем и главным разработчиком. Включал игровой сервер с уникальным набором режимов, систему динамического голосования, сайт-википедию и Discord-сообщество.'}
            fullDesc={'В июне 2020 года я запустил Triangle Union — игровой проект в Garry’s Mod. Изначально он задумывался как сеть игровых серверов, однако ключевым стал сервер «Староигры». На нём игроки могли переключаться между множеством игровых режимов при помощи системы голосования. Проект сопровождался дополнительной инфраструктурой: Discord-сервером для сообщества и вики-сайтом со справочной информацией.\nЯ полностью отвечал за разработку, поддержку и управление проектом: от написания игрового кода и настройки серверов до администрирования сообщества и создания контента.'}
            logo='/portfolio/triangle_union.png'
            logoSize={64}
            roles={['Основатель проекта', 'Главный разработчик', 'Системный администратор', 'Руководитель сообщества']}
            stack={['Lua', 'Garry\'s Mod', 'Docker', 'MySQL']}
            links={[ {img: '/portfolio/discord.svg', url: 'https://discord.gg/KSxjfTYyTe'} ]}
            setModalActive={setModalActive}
            setModalData={setModalData}
          />

          <WorkCard
            title='Triangle Union Website (2022) (Pet-project)'
            desc={'Веб-приложение с информацией о проекте, командой и системой доната. В качестве платежного решения использовался QIWI P2P.'}
            fullDesc={'Я разрабатывал бэкенд для сайта Triangle Union, который предоставлял информацию о проекте, команде и позволял игрокам делать пожертвования через встроенную систему доната. Через бэкенд также реализовывалась конфигурация списка серверов и участников команды, позволяющая динамически обновлять данные без изменения статического контента. Фронтенд создавал мой товарищ. Платежи обрабатывались через QIWI P2P, а серверная часть обеспечивала интеграцию с игрой.'}
            logo='/portfolio/triangle_union.png'
            logoSize={64}
            roles={['Backend-разработчик']}
            stack={['Node.JS', 'JavaScript', 'HTML', 'CSS']}
            links={[ {img: '/portfolio/github-mark-white.svg', url: 'https://github.com/qurs/tria.su-nodejs'} ]}
            setModalActive={setModalActive}
            setModalData={setModalData}
          />

          <WorkCard
            title='Triangle Union Monitoring Bot (2024) (Pet-project)'
            desc={'Node.js-бот, который отслеживал количество игроков на сервере и обновлял соответствующую информацию в Discord-канале.'}
            fullDesc={'Я разработал Discord-бота для проекта Triangle Union на Node.js. Бот автоматически мониторил количество игроков на игровом сервере и обновлял данные в специально отведённом канале Discord, обеспечивая актуальную информацию для сообщества.'}
            logo='/portfolio/triangle_union.png'
            logoSize={64}
            roles={['Разработчик']}
            stack={['Node.JS', 'JavaScript', 'Docker']}
            links={[ {img: '/portfolio/github-mark-white.svg', url: 'https://github.com/qurs/triabot'} ]}
            setModalActive={setModalActive}
            setModalData={setModalData}
          />

          <WorkCard
            title='ANDROMEDA (2023) (Pet-project)'
            desc={'Игровой сервер в Garry’s Mod с собственным режимом в жанре космического RPG. Уникальная особенность — бесконечная карта на базе Infinite Map Base. Игроки могли колонизировать планеты, создавать государства, выполнять квесты, вести торговлю и сражаться за территории. Я был основателем и главным разработчиком проекта.'}
            fullDesc={'В июне 2023 года я создал ANDROMEDA — сервер в Garry’s Mod с уникальным игровым режимом в жанре космического RPG. Главная особенность проекта заключалась в использовании технологии Infinite Map Base, что позволяло реализовать бесконечную карту и масштабный открытый мир.\nИгроки могли исследовать космос, колонизировать планеты, основывать собственные государства, выполнять задания от NPC, добывать ресурсы, зарабатывать внутриигровую валюту, вести дипломатические отношения, а также участвовать в PvP-баталиях за территории или становиться космическими пиратами.\nЯ занимался всеми ключевыми аспектами разработки и управления проектом: от написания игрового режима и настройки инфраструктуры до администрирования сервера и организации игрового сообщества.'}
            logo='/portfolio/andromeda.png'
            roles={['Основатель проекта', 'Главный разработчик', 'Системный администратор', 'Руководитель сообщества']}
            stack={['Lua', 'Garry\'s Mod', 'Docker', 'MySQL']}
            links={[ {img: '/portfolio/discord.svg', url: 'https://discord.gg/49yDHxKDWz'} ]}
            setModalActive={setModalActive}
            setModalData={setModalData}
          />

          <WorkCard
            title='JamSpace Strategy (2023) (Pet-project)'
            desc={'Пошаговая многопользовательская текстовая стратегия, где игроки управляли вымышленными государствами. Каждый ход позволял изменить показатели своей страны или повлиять на соперников. Побеждало последнее выжившее государство.\nМультиплеер был реализован через протокол TCP'}
            fullDesc={'В 2023 году я разработал JamSpace Strategy — экспериментальную текстовую многопользовательскую стратегию. Игра возникла из неформальной идеи: вместе с друзьями мы использовали рисовалку JamSpace от Discord, чтобы создавать вымышленные карты мира, а я дополнил процесс собственной игровой системой.\nВ игре игроки управляли государствами с набором показателей (экономика, военная сила, дипломатия и др.). В свой ход каждый участник мог выполнить одно действие, которое влияло на его страну или на показатели противников. Основная цель — остаться последним выжившим государством.\nСовместив рисовалку JamSpace и мою игру, удалось получить необычный игровой опыт с элементами коллективного творчества и стратегического соперничества.'}
            logo='/portfolio/discord_jamspace.png'
            roles={['Автор идеи и разработчик', 'Организатор игрового процесса']}
            stack={['Lua', 'Luvit', 'TCP']}
            links={[ {img: '/portfolio/github-mark-white.svg', url: 'https://github.com/qurs/jamspace-strategy'} ]}
            setModalActive={setModalActive}
            setModalData={setModalData}
          />

          <WorkCard
            title='Hammer++ Manager (2023) (Pet-project)'
            desc={'Десктопное приложение на Electron для упрощённой настройки и запуска редактора уровней Hammer++. Позволяло автоматизировать рутинные задачи и управлять контентом для Garry’s Mod.'}
            fullDesc={'Я создал Hammer++ Manager, когда Hammer++ не поддерживал Garry’s Mod напрямую. Приложение написано на Electron (JS, HTML, CSS) и позволяет настраивать контент и запускать редактор, сокращая необходимость ручной конфигурации.'}
            logo='/portfolio/hammerpp_manager.png'
            logoSize={64}
            roles={['Разработчик приложения', 'Дизайнер интерфейса']}
            stack={['Electron', 'JavaScript', 'HTML', 'CSS']}
            links={[ {img: '/portfolio/github-mark-white.svg', url: 'https://github.com/qurs/hammerpp-manager'} ]}
            setModalActive={setModalActive}
            setModalData={setModalData}
          />

          <WorkCard
            title='Pretty Commits Service (2023) (Pet-project)'
            desc={'Инструмент для публикации коммитов GitHub в Discord через вебхук с более читаемым форматированием и поддержкой конфиденциальных коммитов.'}
            fullDesc={'Я разработал сервис, который интегрирует GitHub и Discord через вебхуки. Сервис публикует коммиты в Discord в удобочитаемом формате, при этом поддерживает конфиденциальные коммиты, скрывая детали изменений, если разработчик не хочет раскрывать их публично.'}
            logo='/portfolio/pretty_commits.png'
            logoSize={64}
            roles={['Разработчик сервиса']}
            stack={['Node.JS', 'JavaScript', 'Docker']}
            links={[ {img: '/portfolio/github-mark-white.svg', url: 'https://github.com/qurs/pretty-commits'} ]}
            setModalActive={setModalActive}
            setModalData={setModalData}
          />

          <WorkCard
            title='GoFishing (2024) (Pet-project)'
            desc={'Экспериментальная игра про рыбалку с меню, системой локаций и мини-игрой ловли рыбы. Проект не завершён.'}
            fullDesc={'Я разрабатывал 2D игру про рыбалку на фреймворке Love2D. На данный момент реализованы меню, система локаций и мини-игра ловли рыбы. Проект остаётся в разработке и представляет собой эксперимент с игровыми механиками и логикой.'}
            logo='/portfolio/gofishing.png'
            logoSize={128}
            roles={['Разработчик игры', 'Дизайнер игровых механик']}
            stack={['Love2D', 'Lua']}
            links={[ {img: '/portfolio/github-mark-white.svg', url: 'https://github.com/qurs/gofishing'} ]}
            setModalActive={setModalActive}
            setModalData={setModalData}
          />

          <WorkCard
            title='QMC Launcher (2022) (Pet-project)'
            desc={'Простой лаунчер Minecraft на LuaJIT с проверкой модов через REST API для защиты от запрещённых модификаций.'}
            fullDesc={'Я разработал QMC Launcher — минималистичный лаунчер Minecraft без графического интерфейса, написанный на LuaJIT. Главной задачей было обеспечение защиты от игроков с запрещёнными модами. При входе через лаунчер список модов игрока отправлялся на бэкенд через REST API, где проверялся на наличие запрещённых модификаций.'}
            logo='/portfolio/qmc_launcher.png'
            logoSize={64}
            roles={['Разработчик лаунчера', 'Разработчик бекэнда']}
            stack={['Lua', 'LuaJIT', 'HTTP']}
            links={[ {img: '/portfolio/github-mark-white.svg', url: 'https://github.com/qurs/mc-launcher'} ]}
            setModalActive={setModalActive}
            setModalData={setModalData}
          />

          <WorkCard
            title='SC Bot (2021) (Pet-project)'
            desc={'Discord-бот для локального сообщества на Lua (Discordia) с системой социальных кредитов, играми и таблицей лидеров пользователей по кредитам.'}
            fullDesc={'Я разработал SC Bot для небольшого Discord-сообщества друзей на Lua с использованием фреймворка Discordia. Основные функции бота включали:\nСистема социальных кредитов: начислялись или терялись за действия игроков (выход с сервера, нарушение правил, участие в мини-играх).\nИгры: реализованы «Кости» и «Сапёр», где игроки могли зарабатывать кредиты.\nМагазин скинов CS:GO: за социальные кредиты можно было покупать реальные скины, которые пополнял вручную.\nЛидерборд: отображение игроков с наибольшим количеством социальных кредитов.\nБот объединял игровые и социальные механики для взаимодействия внутри сообщества.'}
            logo='/portfolio/scbot.png'
            logoSize={64}
            roles={['Разработчик']}
            stack={['Lua', 'Discordia', 'Luvit']}
            links={[ {img: '/portfolio/github-mark-white.svg', url: 'https://github.com/qurs/sc-bot'} ]}
            setModalActive={setModalActive}
            setModalData={setModalData}
          />
        </div>

        <WorkModalCard
          active={modalActive}
          setModalActive={setModalActive}
          modalData={modalData!}
        />
      </div>
    </>
  );
}