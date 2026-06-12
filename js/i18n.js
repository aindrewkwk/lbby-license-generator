/* ══════════════════════════════════════════════════════════════════════
   R Studio — rstudio.live  ·  i18n (Vietnamese + English)
   ══════════════════════════════════════════════════════════════════════ */

const translations = {
  vi: {
    // ── Nav ──
    "nav.products":   "Sản phẩm",
    "nav.lbby":       "Lbby",
    "nav.docs":       "Tài liệu",
    "nav.changelog":  "Nhật ký",
    "nav.license":    "Giấy phép",
    "nav.contact":    "Liên hệ",
    "nav.lang_label": "EN",

    // ── Hero ──
    "hero.tagline":        "Một phần mềm",
    "hero.tagline_span":   "được thiết kế",
    "hero.description":    "Chúng tôi là R Studio — studio phần mềm tạo ra những công cụ mạnh mẽ, tinh tế dành cho game thủ và người sáng tạo. Chúng tôi tin rằng phần mềm tuyệt vời phải mang lại trải nghiệm nhẹ nhàng.",
    "hero.cta_primary":    "Khám phá sản phẩm",
    "hero.cta_secondary":  "Lbby",

    // ── Products ──
    "products.title":       "Sản phẩm của chúng tôi",
    "products.subtitle":    "Những công cụ được xây dựng tỉ mỉ, giải quyết vấn đề thực tế.",
    "products.lbby_desc":   "Một trình quản lý máy chủ Minecraft hiện đại. Cài đặt, quản lý và chia sẻ — tất cả trong một ứng dụng gốc. Không cần cấu hình mạng, không cần dòng lệnh, không phiền phức.",
    "products.learn_more":  "Tìm hiểu thêm →",

    // ── Lbby ──
    "lbby.title":            "Lbby",
    "lbby.subtitle":         "Máy chủ Minecraft trở nên đơn giản. Bởi R Studio.",
    "lbby.features_title":   "Tất cả những gì bạn cần",
    "lbby.features_subtitle":"Từ con số không đến máy chủ đang chạy chỉ trong chưa đầy một phút. Không cần dòng lệnh, không cần file cấu hình, không phiền phức.",
    "lbby.download_title":     "Tải Lbby",
    "lbby.download_subtitle":  "Miễn phí sử dụng. Có sẵn cho Windows, macOS và Linux.",
    "lbby.github_releases":    "Xem tất cả phiên bản trên GitHub",
    "lbby.beta_notice":        "⚠ Lưu ý Beta: Ứng dụng hiện chưa được ký số. Trên macOS, nhấn chuột phải → Mở → Mở. Trên Windows, nhấn \"Thông tin khác → Chạy anyway\".",

    // ── Features ──
    "features.server_types":       "11 Loại máy chủ",
    "features.server_types_desc":  "Vanilla, Paper, Folia, Purpur, Bukkit, Spigot, Forge, Fabric, NeoForge, SpongeVanilla và SpongeForge — tất cả đều có trong trình hướng dẫn cài đặt.",
    "features.play_anywhere":      "Chơi mọi nơi",
    "features.play_anywhere_desc": "Tích hợp sẵn playit.gg để bạn bè có thể tham gia từ bất kỳ đâu. Không cần mở cổng mạng hay IP tĩnh.",
    "features.remote_control":     "Điều khiển từ xa",
    "features.remote_control_desc":"Quản lý máy chủ từ điện thoại hoặc máy tính khác. Mạng LAN + Cloudflare Quick Tunnel với xác thực token bảo mật.",
    "features.mods_plugins":       "Mod & Plugin",
    "features.mods_plugins_desc":  "Duyệt Modrinth, cài đặt mod và plugin, hỗ trợ modpack (Modrinth + CurseForge), cùng trình kiểm tra cập nhật tự động.",
    "features.backups":            "Sao lưu",
    "features.backups_desc":       "Tạo bản sao lưu ZIP, khôi phục từ bản sao lưu và lên lịch sao lưu tự động. Không bao giờ mất thế giới của bạn nữa.",
    "features.performance":        "Hiệu suất",
    "features.performance_desc":   "Tối ưu JVM, giám sát TPS, tạo trước chunk và bảng điều khiển tùy chỉnh với đồng hồ vòng trực tiếp.",
    "features.player_admin":       "Quản lý người chơi",
    "features.player_admin_desc":  "Danh sách người chơi trực tuyến với avatar đầu Minecraft. OP, kick, ban, unban và teleport — tất cả từ ứng dụng.",
    "features.live_console":       "Console trực tiếp",
    "features.live_console_desc":  "Bảng điều khiển máy chủ thời gian thực với khả năng nhập lệnh. Giám sát người chơi, TPS, RAM, CPU và ổ đĩa từ bảng dashboard.",
    "features.dark_light":         "Chế độ tối & sáng",
    "features.dark_light_desc":    "Giao diện đẹp mắt với chủ đề tối và sáng. Hỗ trợ ngôn ngữ tiếng Anh và tiếng Việt.",

    // ── Download ──
    "download.title":          "Tải Lbby",
    "download.subtitle":       "Miễn phí sử dụng. Có sẵn cho Windows, macOS và Linux.",
    "download.github_releases":"Xem tất cả phiên bản trên GitHub",
    "download.beta_notice":    "⚠ Lưu ý Beta: Ứng dụng hiện chưa được ký số. Trên macOS, nhấn chuột phải → Mở → Mở. Trên Windows, nhấn \"Thông tin khác → Chạy anyway\".",

    // ── Docs ──
    "docs.title":                  "Tài liệu Lbby",
    "docs.subtitle":               "Bắt đầu nhanh, rồi làm chủ mọi tính năng.",
    "docs.getting_started":        "Bắt đầu",
    "docs.server_types":           "Các loại máy chủ",
    "docs.player_management":      "Quản lý người chơi",
    "docs.mods_plugins":           "Mod & Plugin",
    "docs.backups":                "Sao lưu",
    "docs.performance":            "Mẹo hiệu suất",
    "docs.playit_troubleshooting": "Khắc phục sự cố playit.gg",

    // Docs — Getting Started
    "docs.gs_1": "<strong>Cài đặt Lbby</strong> — Tải phiên bản mới nhất cho hệ điều hành của bạn từ mục <a href=\"/lbby#download\">Tải về</a>. Ứng dụng là file chạy độc lập — không cần cài đặt thêm gì.",
    "docs.gs_2": "<strong>Tạo máy chủ</strong> — Mở Lbby và nhấn <strong>Máy chủ mới</strong>. Chọn tên, phiên bản Minecraft và loại máy chủ (Vanilla, Paper, Fabric, Forge hoặc Spigot). Lbby sẽ tự động tải JAR, tạo cấu trúc thư mục và file cấu hình.",
    "docs.gs_3": "<strong>Khởi động & Kết nối</strong> — Nhấn <strong>Khởi động</strong> trên thẻ máy chủ. Lbby sẽ chạy máy chủ và tự động thiết lập địa chỉ công khai qua <strong>playit.gg</strong> — không cần mở cổng mạng. Chia sẻ địa chỉ đó cho bạn bè để họ tham gia.",

    // Docs — Server Types
    "docs.st_vanilla": "<strong>Vanilla</strong> — Phần mềm máy chủ chính thức của Minecraft. Không mod, không plugin — gameplay thuần túy. Phù hợp nhất cho nhóm bạn nhỏ muốn trải nghiệm gốc.",
    "docs.st_paper":   "<strong>Paper</strong> — Bản fork hiệu suất cao của Spigot với tối ưu và sửa lỗi bổ sung. Hỗ trợ plugin qua Bukkit/Spigot API. Lựa chọn được khuyên dùng cho hầu hết máy chủ.",
    "docs.st_fabric":  "<strong>Fabric</strong> — Trình tải mod nhẹ, hiện đại. Lý tưởng cho mod phía client và server. Hệ sinh thái mod lớn với các công cụ như Sodium, Lithium và Iris.",
    "docs.st_forge":   "<strong>Forge</strong> — Nền tảng modding gốc của Minecraft. Hỗ trợ modpack lớn và framework modding phức tạp. Phù hợp nhất cho máy chủ modpack nặng.",
    "docs.st_spigot":  "<strong>Spigot</strong> — Bản fork CraftBukkit với cải tiến hiệu suất và hỗ trợ plugin. Lựa chọn tốt cho máy chủ dựa trên plugin.",

    // Docs — Player Management
    "docs.pm_whitelist": "<strong>Whitelist</strong> — Bật whitelist từ bảng dashboard để giới hạn ai được tham gia. Thêm người chơi theo tên Minecraft. Danh sách whitelist lưu trong <code>whitelist.json</code>.",
    "docs.pm_ops":       "<strong>Ops (Operators)</strong> — Cấp quyền quản trị cho người chơi đáng tin cậy. Ops có thể chạy lệnh máy chủ, quản lý người chơi và thay đổi cài đặt game. Quản lý qua bảng Ops trong Lbby.",
    "docs.pm_bans":      "<strong>Bans</strong> — Cấm người chơi theo tên hoặc địa chỉ IP. Danh sách cấm lưu trong <code>banned-players.json</code> và <code>banned-ips.json</code>. Quản lý từ bảng Người chơi.",

    // Docs — Mods & Plugins
    "docs.mp_mods":     "<strong>Cài đặt Mod</strong> — Đối với máy chủ Fabric và Forge, thả file mod <code>.jar</code> vào thư mục <code>mods</code> trong thư mục máy chủ. Lbby hiển thị đường dẫn máy chủ trong cài đặt. Khởi động lại máy chủ sau khi thêm mod.",
    "docs.mp_plugins":  "<strong>Cài đặt Plugin</strong> — Đối với máy chủ Paper và Spigot, thả file plugin <code>.jar</code> vào thư mục <code>plugins</code>. Plugin được tải tự động khi khởi động máy chủ. Nguồn phổ biến: <a href=\"https://modrinth.com\" target=\"_blank\">Modrinth</a>, <a href=\"https://hangar.papermc.io\" target=\"_blank\">Hangar</a>, <a href=\"https://www.spigotmc.org/resources/\" target=\"_blank\">SpigotMC</a>.",
    "docs.mp_modpacks": "<strong>Modpack (Forge)</strong> — Forge hỗ trợ modpack đầy đủ. Tải file server của modpack, giải nén vào thư mục máy chủ và đảm bảo phiên bản Forge khớp. Lbby sẽ tự động phát hiện và chạy JAR phù hợp.",

    // Docs — Backups
    "docs.bk_auto":     "<strong>Sao lưu tự động</strong> — Lbby có thể tự động sao lưu dữ liệu thế giới theo lịch trình tùy chỉnh. Bật sao lưu tự động trong cài đặt máy chủ. Bản sao lưu được lưu cục bộ và có thể khôi phục chỉ bằng một cú nhấp.",
    "docs.bk_manual":   "<strong>Sao lưu thủ công</strong> — Tạo bản chụp nhanh máy chủ bất kỳ lúc nào từ bảng dashboard. Hữu ích trước khi thực hiện thay đổi lớn như cập nhật mod hoặc chỉnh sửa thế giới.",
    "docs.bk_restore":  "<strong>Khôi phục</strong> — Chọn một bản sao lưu từ danh sách và nhấn <strong>Khôi phục</strong>. Máy chủ sẽ dừng, dữ liệu thế giới được thay thế và bạn có thể khởi động lại. Luôn dừng máy chủ trước khi khôi phục.",

    // Docs — Performance Tips
    "docs.pt_ram":      "<strong>Cấp đủ RAM</strong> — Đối với máy chủ Vanilla với vài người chơi, 2–4 GB là đủ. Máy chủ mod (Forge/Fabric) có thể cần 4–8 GB. Điều chỉnh trong cài đặt máy chủ. Không nên cấp quá 8 GB trừ khi chạy modpack lớn.",
    "docs.pt_paper":    "<strong>Dùng Paper để tối ưu hiệu suất</strong> — Paper bao gồm hàng trăm tối ưu hiệu suất so với Vanilla và Spigot. Nếu không cần mod Forge/Fabric, Paper là lựa chọn tốt nhất cho máy chủ nhanh và ổn định.",
    "docs.pt_distance": "<strong>Khoảng nhìn</strong> — Giảm khoảng nhìn trong <code>server.properties</code> (mặc định là 10). Đối với phần cứng yếu, 6–8 chunk là mức cân bằng tốt giữa hiệu suất và tầm nhìn.",
    "docs.pt_update":   "<strong>Luôn cập nhật</strong> — Luôn chạy phiên bản Minecraft server mới nhất và phiên bản Lbby mới nhất. Các bản cập nhật bao gồm cải tiến hiệu suất và vá bảo mật.",

    // Docs — playit.gg Troubleshooting
    "docs.ptg_what":       "<strong>playit.gg là gì?</strong> — playit.gg là dịch vụ tunnel cung cấp địa chỉ IP công khai cho máy chủ cục bộ mà không cần mở cổng mạng. Lbby tích hợp playit.gg tự động — bạn không cần cài đặt hay cấu hình riêng.",
    "docs.ptg_failed":     "<strong>\"Không khởi động được tunnel\"</strong> — Thường do file playit.gg bị thiếu hoặc cũ. Lbby quản lý việc này, nhưng nếu gặp lỗi: dừng máy chủ, khởi động lại Lbby và thử lại. Ứng dụng sẽ tự tải lại file nếu cần.",
    "docs.ptg_cant_join":  "<strong>Bạn bè không thể kết nối</strong> — Đảm bảo bạn chia sẻ đầy đủ địa chỉ từ Lbby (dạng <code>xx.playit.gg:PORT</code>). Máy chủ phải đang chạy. Nếu địa chỉ thay đổi, chia sẻ lại — địa chỉ playit.gg có thể thay đổi giữa các phiên.",
    "docs.ptg_latency":    "<strong>Độ trễ cao</strong> — playit.gg định tuyến lưu lượng qua server của họ, gây thêm độ trễ. Nếu bạn và bạn bè cùng mạng nội bộ, kết nối LAN trực tiếp (<code>localhost</code> hoặc IP nội bộ) sẽ nhanh hơn.",
    "docs.ptg_account":    "<strong>Tài khoản playit.gg</strong> — Sử dụng playit.gg qua Lbby không cần tài khoản playit.gg. Để có tính năng nâng cao (tên miền tùy chỉnh, IP tĩnh), bạn có thể tạo tài khoản tại <a href=\"https://playit.gg\" target=\"_blank\">playit.gg</a>.",

    // ── Changelog ──
    "changelog.title":        "Nhật ký Lbby",
    "changelog.subtitle":     "Những gì mới trong các phiên bản gần đây.",
    "changelog.all_releases": "Xem tất cả phiên bản",

    // ── Contact ──
    "contact.title":       "Liên hệ",
    "contact.subtitle":    "Có câu hỏi, phản hồi hay cần hỗ trợ? Hãy liên hệ với chúng tôi.",
    "contact.discord":     "Discord",
    "contact.discord_sub": "Tham gia cộng đồng",
    "contact.github":      "GitHub",
    "contact.github_sub":  "Mã nguồn & vấn đề",

    // ── Footer ──
    "footer.copyright": "© 2026 R Studio. Mọi quyền được bảo lưu."
  },

  en: {
    // ── Nav ──
    "nav.products":   "Products",
    "nav.lbby":       "Lbby",
    "nav.docs":       "Docs",
    "nav.changelog":  "Changelog",
    "nav.license":    "License",
    "nav.contact":    "Contact",
    "nav.lang_label": "VI",

    // ── Hero ──
    "hero.tagline":        "Software",
    "hero.tagline_span":   "by design",
    "hero.description":    "We are R Studio — a software studio crafting powerful, elegant tools for gamers and creators. We believe great software should feel effortless.",
    "hero.cta_primary":    "Explore Our Products",
    "hero.cta_secondary":  "Lbby",

    // ── Products ──
    "products.title":       "Our Products",
    "products.subtitle":    "Thoughtfully built tools designed to solve real problems.",
    "products.lbby_desc":   "A modern Minecraft server host. Install, manage, and share — all from one native app. No port forwarding, no terminal, no headaches.",
    "products.learn_more":  "Learn more →",

    // ── Lbby ──
    "lbby.title":            "Lbby",
    "lbby.subtitle":         "Minecraft servers made simple. By R Studio.",
    "lbby.features_title":   "Everything you need",
    "lbby.features_subtitle":"From zero to a running server in under a minute. No terminal, no config files, no headaches.",
    "lbby.download_title":     "Download Lbby",
    "lbby.download_subtitle":  "Free to use. Available for Windows, macOS, and Linux.",
    "lbby.github_releases":    "View All Releases on GitHub",
    "lbby.beta_notice":        "⚠ Beta Notice: The app is currently unsigned. On macOS, right-click → Open → Open. On Windows, click \"More info → Run anyway\".",

    // ── Features ──
    "features.server_types":       "11 Server Types",
    "features.server_types_desc":  "Vanilla, Paper, Folia, Purpur, Bukkit, Spigot, Forge, Fabric, NeoForge, SpongeVanilla, and SpongeForge — all from a guided setup wizard.",
    "features.play_anywhere":      "Play Anywhere",
    "features.play_anywhere_desc": "Built-in playit.gg tunnel so friends can join from anywhere. No port forwarding or static IP needed.",
    "features.remote_control":     "Remote Control",
    "features.remote_control_desc":"Manage your server from your phone or another PC. LAN + Cloudflare Quick Tunnel with secure token authentication.",
    "features.mods_plugins":       "Mods & Plugins",
    "features.mods_plugins_desc":  "Browse Modrinth, install mods & plugins, modpack support (Modrinth + CurseForge), and automatic update checker.",
    "features.backups":            "Backups",
    "features.backups_desc":       "Create ZIP backups, restore from backups, and schedule automatic backups. Never lose your world again.",
    "features.performance":        "Performance",
    "features.performance_desc":   "JVM optimization presets, TPS monitoring, chunk pre-generation, and customizable dashboard with live ring meters.",
    "features.player_admin":       "Player Admin",
    "features.player_admin_desc":  "Online player list with Minecraft head avatars. OP, kick, ban, unban, and teleport — all from the app.",
    "features.live_console":       "Live Console",
    "features.live_console_desc":  "Real-time server console with command input. Monitor players, TPS, RAM, CPU, and disk from the dashboard.",
    "features.dark_light":         "Dark & Light Mode",
    "features.dark_light_desc":    "Beautiful UI with dark and light themes. English and Vietnamese language support.",

    // ── Download ──
    "download.title":          "Download Lbby",
    "download.subtitle":       "Free to use. Available for Windows, macOS, and Linux.",
    "download.github_releases":"View All Releases on GitHub",
    "download.beta_notice":    "⚠ Beta Notice: The app is currently unsigned. On macOS, right-click → Open → Open. On Windows, click \"More info → Run anyway\".",

    // ── Docs ──
    "docs.title":                  "Lbby Docs",
    "docs.subtitle":               "Get up and running, then master every feature.",
    "docs.getting_started":        "Getting Started",
    "docs.server_types":           "Server Types",
    "docs.player_management":      "Player Management",
    "docs.mods_plugins":           "Mods & Plugins",
    "docs.backups":                "Backups",
    "docs.performance":            "Performance Tips",
    "docs.playit_troubleshooting": "playit.gg Troubleshooting",

    // Docs — Getting Started
    "docs.gs_1": "<strong>Install Lbby</strong> — Download the latest release for your platform from the <a href=\"/lbby#download\">Download</a> section. The app is a standalone native binary — no dependencies required.",
    "docs.gs_2": "<strong>Create Your Server</strong> — Open Lbby and click <strong>New Server</strong>. Choose a name, select a Minecraft version, and pick a server type (Vanilla, Paper, Fabric, Forge, or Spigot). Lbby handles the rest — downloading the JAR, creating the folder structure, and generating configuration files.",
    "docs.gs_3": "<strong>Start & Connect</strong> — Hit <strong>Start</strong> on your server card. Lbby launches the server and automatically sets up a public address using <strong>playit.gg</strong> — no port forwarding needed. Share the provided address with friends so they can join.",

    // Docs — Server Types
    "docs.st_vanilla": "<strong>Vanilla</strong> — The official Minecraft server software. No mods, no plugins — pure gameplay. Best for small friend groups who want the stock experience.",
    "docs.st_paper":   "<strong>Paper</strong> — A high-performance fork of Spigot with additional optimizations and bug fixes. Supports plugins via the Bukkit/Spigot API. The recommended choice for most servers.",
    "docs.st_fabric":  "<strong>Fabric</strong> — A lightweight, modern mod loader. Ideal for clientside and serverside mods. Large mod ecosystem with tools like Sodium, Lithium, and Iris.",
    "docs.st_forge":   "<strong>Forge</strong> — The original Minecraft modding platform. Supports large modpacks and complex modding frameworks. Best for heavy modpack servers.",
    "docs.st_spigot":  "<strong>Spigot</strong> — A CraftBukkit fork with performance improvements and plugin support. A solid choice for plugin-based servers.",

    // Docs — Player Management
    "docs.pm_whitelist": "<strong>Whitelist</strong> — Enable the whitelist from the server dashboard to restrict who can join. Add players by their Minecraft username. Whitelisted players are stored in <code>whitelist.json</code>.",
    "docs.pm_ops":       "<strong>Ops (Operators)</strong> — Grant operator privileges to trusted players. Ops can run server commands, manage players, and change game settings. Managed through the Ops panel in Lbby.",
    "docs.pm_bans":      "<strong>Bans</strong> — Ban players by username or IP address. Banned players are stored in <code>banned-players.json</code> and <code>banned-ips.json</code>. Manage bans from the Players panel.",

    // Docs — Mods & Plugins
    "docs.mp_mods":     "<strong>Installing Mods</strong> — For Fabric and Forge servers, drop <code>.jar</code> mod files into the <code>mods</code> folder inside your server directory. Lbby displays the server path in the server settings. Restart the server after adding mods.",
    "docs.mp_plugins":  "<strong>Installing Plugins</strong> — For Paper and Spigot servers, drop <code>.jar</code> plugin files into the <code>plugins</code> folder. Plugins are loaded automatically on server start. Popular sources: <a href=\"https://modrinth.com\" target=\"_blank\">Modrinth</a>, <a href=\"https://hangar.papermc.io\" target=\"_blank\">Hangar</a>, <a href=\"https://www.spigotmc.org/resources/\" target=\"_blank\">SpigotMC</a>.",
    "docs.mp_modpacks": "<strong>Modpacks (Forge)</strong> — Forge supports full modpacks. Download a modpack's server files, extract them into your server directory, and ensure the Forge version matches. Lbby will detect and launch the correct JAR.",

    // Docs — Backups
    "docs.bk_auto":     "<strong>Automatic Backups</strong> — Lbby can automatically create backups of your world data on a configurable schedule. Enable auto-backups in server settings. Backups are stored locally and can be restored with one click.",
    "docs.bk_manual":   "<strong>Manual Backups</strong> — Create a snapshot of your server at any time from the server dashboard. Useful before major changes like mod updates or world edits.",
    "docs.bk_restore":  "<strong>Restoring</strong> — Select a backup from the backups list and click <strong>Restore</strong>. The server will stop, the world data will be replaced, and you can restart. Always stop the server before restoring.",

    // Docs — Performance Tips
    "docs.pt_ram":      "<strong>Allocate Enough RAM</strong> — For Vanilla servers with a few players, 2–4 GB is sufficient. Modded servers (Forge/Fabric) may need 4–8 GB. Adjust in server settings. Avoid allocating more than 8 GB unless running large modpacks.",
    "docs.pt_paper":    "<strong>Use Paper for Better Performance</strong> — Paper includes hundreds of performance optimizations over Vanilla and Spigot. If you don't need Forge/Fabric mods, Paper is the best choice for a fast, stable server.",
    "docs.pt_distance": "<strong>View Distance</strong> — Lower the view distance in <code>server.properties</code> (default is 10). For weaker hardware, 6–8 chunks is a good balance between performance and visibility.",
    "docs.pt_update":   "<strong>Keep Software Updated</strong> — Always run the latest Minecraft server version and the latest version of Lbby. Updates include performance improvements and security patches.",

    // Docs — playit.gg Troubleshooting
    "docs.ptg_what":       "<strong>What is playit.gg?</strong> — playit.gg is a tunneling service that gives your local server a public IP address without port forwarding. Lbby integrates playit.gg automatically — you don't need to install or configure it separately.",
    "docs.ptg_failed":     "<strong>\"Failed to start tunnel\"</strong> — This usually means the playit.gg binary is missing or outdated. Lbby manages this for you, but if you see this error: stop the server, restart Lbby, and try again. The app will re-download the binary if needed.",
    "docs.ptg_cant_join":  "<strong>Friends Can't Connect</strong> — Make sure you're sharing the full address from Lbby (it looks like <code>xx.playit.gg:PORT</code>). The server must be running. If the address changed, re-share it — playit.gg addresses can change between sessions.",
    "docs.ptg_latency":    "<strong>High Latency</strong> — playit.gg routes traffic through their servers, which adds some latency. If you and your friends are on the same local network, direct LAN connection (<code>localhost</code> or local IP) will be faster.",
    "docs.ptg_account":    "<strong>playit.gg Account</strong> — Using playit.gg through Lbby does not require a playit.gg account. For advanced features (custom domains, static IPs), you can create an account at <a href=\"https://playit.gg\" target=\"_blank\">playit.gg</a>.",

    // ── Changelog ──
    "changelog.title":        "Lbby Changelog",
    "changelog.subtitle":     "What's new in recent releases.",
    "changelog.all_releases": "View All Releases",

    // ── Contact ──
    "contact.title":       "Get in Touch",
    "contact.subtitle":    "Have questions, feedback, or need help? Reach out to us.",
    "contact.discord":     "Discord",
    "contact.discord_sub": "Join our community",
    "contact.github":      "GitHub",
    "contact.github_sub":  "Source code & issues",

    // ── Footer ──
    "footer.copyright": "© 2026 R Studio. All rights reserved."
  }
};

/* ── Language helpers ──────────────────────────────────────────────── */

function getLang() {
  return localStorage.getItem("rstudio-lang") || "vi";
}

function setLang(lang) {
  localStorage.setItem("rstudio-lang", lang);
  document.documentElement.lang = lang;

  const dict = translations[lang];
  if (!dict) return;

  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    var key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      // If the translation contains HTML tags, use innerHTML
      if (/<[a-z][\s\S]*>/i.test(dict[key])) {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });
}

function toggleLang() {
  var next = getLang() === "vi" ? "en" : "vi";
  setLang(next);
}

/* ── Apply saved language on load ──────────────────────────────────── */
document.addEventListener("DOMContentLoaded", function () {
  setLang(getLang());
});
