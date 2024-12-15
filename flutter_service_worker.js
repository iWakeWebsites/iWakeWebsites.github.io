'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "b32afd1b02b173a943a649c2e440d03e",
"version.json": "cdd835c57b6ef865503183e3ecaff9a7",
"index.html": "4a187891f524efc01b8c33a707ba433d",
"/": "4a187891f524efc01b8c33a707ba433d",
"main.dart.js": "c0a5a68743e1882260448ae7b9b0c690",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b02d8e52d425d226ff32266b44185301",
".git/REBASE_HEAD": "03bd80d7bf1f7ef9222ba751a7d5ca45",
".git/ORIG_HEAD": "090875c3e36141f3623490edf6419dd3",
".git/config": "657a06ff4953c64c8214db9ac2e2ead9",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/57/68d1c201291428fdee35e40b22aa18cec8e701": "4f19d6dd4b92564f1ca05147d19e0376",
".git/objects/03/76e0805813c4e391e534299f0e93b92a6e7417": "10f33bb203412f69a7f152585998fbbb",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/63836dfed19585ade87bf895632eb384972fc0": "0c1388cfc49ab288b04b89da7de83fac",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/0334c721d7c2361f18b2eb16b06783df3e0196": "459ab314625ba335bcf5808979bf2d91",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/67/6167044abacbbd90b753226b7fc55d03e2fd77": "da01d79411321b24bcd843d9ea888723",
".git/objects/67/5393705bfe4035efddccb645a71e7f416e96bd": "9aecf659166c9860f3a07b0417117b3d",
".git/objects/0b/454bd53297f16cf4f12dfd94573ecf1444f72c": "77cc28c1ed077f27d968e49891a3723d",
".git/objects/0e/6c2d4bad0c2dd504966c25a3c407671b76797c": "2321752722c572f9a0af36381c167bea",
".git/objects/05/a2ca31cc8c70d7baf4f0db10d61476be6ccf38": "578287f8091931656b224e7a2c2784b3",
".git/objects/d9/f88c3e323dc14cf32cbd0dc0348f80299ca0c5": "fa5246117111b1be2f5157190b11244e",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/da/14224d57ab6e2c31b203ee4b9f0f33cc2d835c": "d45b6256f1d9da2b7c127c5bc2b32910",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/a2/9c65ceb7d67ac7e6f9f704e631bfc74207e088": "280c4694d0b6c1f6a0d9cf8917d3be57",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/a566f457e496436c3777bbfd491ba42f14c44c": "f0b8eab86efca53786b23933af597846",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/d8302679af34b24996669c628b05242e5c8d48": "eebc767fbc9f3c1cf9119e6a12436064",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/625234305085b057b9e45ce5f8701aad073293": "823286c1b29221aedd9a38541ae8dd9b",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/e4/fd24e105c6d686cb9ad0f3518cfaa0a6dce8e4": "acb1de0ec2a955b38a3cf38383693b13",
".git/objects/c8/7c7d0987b81d46785885bc33c8189678d2b0ae": "ae7ca222dbdedb7f75ea55b5dd0913f1",
".git/objects/fb/53bbf506138077fb049a1a2bcdca180c5fa06a": "c5cf19477b8bb94b29f727f2c4702016",
".git/objects/fb/cfac64b70f282b4ed86627cf27a99729f3f9da": "e8450e2ef282405750580c4c12ce6b05",
".git/objects/27/461a22712573dae2f57f81fa203b9e937f53d7": "710b1e15167e7b053a4c1542a3c16014",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/11/344a80d3c79a80057274bf6980ee17e2e546b9": "7b16870357b885a88c9adc7c99aa4cb2",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/42/3d816595f73c0bea2413ce62999bfe9a4dcfcf": "4a03f7018d87ff5a4514e2c537ddbd32",
".git/objects/45/1dab23d25510023436970cf53888bc9259adf5": "49ff2073f03efd12b5453f147ca47417",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/87/27cdbb2cfc57c6d672d41a12ebd1cca77053de": "825a4baebf037a02b532c2cc81d93487",
".git/objects/28/568abb2f7983e576eca25bd9dd1433969a963f": "83645a71f6cfbb11b2b89fe925cbf948",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8f/635ad64693b1c0ab471e05087b52b6cf20f7f7": "3ff4d72ee2351e85ac8ceb01284b0852",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/44/ac8f14a0331e966f9b92ca904df24065976c7d": "53ad0a9680a757bb4a7541688c928dde",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/628275f47a7b60afed0d2eb2e6ebd858d2f023": "f3423477968e5e847c8e6bbb05cb4589",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/9a/abfb03c606735c77216f54f001a847e7b4bdee": "c182399321dadb0bd6dd150359d62d93",
".git/objects/36/1ed51ceb0de2749c8d103dc34ab609da2252ef": "ee144a9da257fc3efb5c91ae24cc13b2",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/30/6ab5b4b8fbbd3c4b9c1dfcb67e39145934375f": "f5b24594773876f7de6be3e12831040f",
".git/objects/37/9db2e210d84c0496f5a7da47d7bb6b19f3862b": "9f3bd672be9556e1664c6fb32a9cac44",
".git/objects/08/6c693f9c0ec3a082129110fe10c327a0cee958": "854928ff86a9d9e3f17ee6547775eb6f",
".git/objects/08/9640d52100a77b7aff5460c3f7b7e4201d7c21": "ed291a3b4490b22e30ef72ddfe49251e",
".git/objects/08/98f65ad605f61bd7d96cf10e1e0e59566d7c6c": "9c99fb7dd9f37d6d8f0dc3c1d5b1d7a4",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/55/a5ba76672fdf6d597c8db939ed636a14d48759": "dfab32e6efefe385805c4dc4fb7ff306",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/dd/4f1b04c6ce6a970faf37e2e44ef1b1b3e66900": "2001b785390e645455346a8c4f38b71e",
".git/objects/b6/f790a9d9c929d6a018b4591af08f5b07ee0f50": "97fe93c0ddce446d1e86582dfbe1ba15",
".git/objects/d5/3627a9f08310c3b2560c69cd17663d8d2eacbf": "bff3693f7d90b061fce62db429672c07",
".git/objects/aa/245dca2835f57038bd7b2b7ee89d7e811cf210": "35b3ef9e5cbf11188890da81c7a55551",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/9fb93d6b53bf14487253188fdbc4e692fa7e89": "46ef223e73998b8e6e19d5f2b20bdb90",
".git/objects/e1/bfb84c59aa9ef3f4323b928a0225f12a098dd4": "164ab95a133535a4e40059ff708bfd6b",
".git/objects/e8/a529e35fbff353ecea0e5e428da340ea945ccf": "132d6d950992dc39227503ccb37481f6",
".git/objects/ff/75c455755f07fb0825b5c84b09956129af95f3": "dc286d842e44b4467b8ba12a02c0c3c3",
".git/objects/c5/ce2927f8eae5e9a65d2e1444bf611e652ccd76": "6965b1e78911a274b0a9f0b05736ae2c",
".git/objects/f6/62a0cffd598aeda89fd1a467dc4d22d6c89179": "d725cdbca97f64648bc862131bb1447b",
".git/objects/f8/9dd6493231ed2f947b90ef9c771725cd936aed": "b19585c22208fe0bb1808381e99aab6f",
".git/objects/f8/dc2887db55b089a1f2b590312b07915d612e41": "1e68a0dae7bea284c51ae2079c3de387",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/cfc28f23a00bb0d963091d76601ad8d01eb846": "10df8180ed2cfe9d47b51f77da5750e3",
".git/objects/41/19a326e732b274e484636388da5f85361b0c61": "c437cc38979a1546662401908086d7a0",
".git/objects/83/98894cdf295c4ecb2bd044b2409f4dd7872d0a": "2059f5615481998b7172906a2fe1dd6a",
".git/objects/48/9fd8b0b6d68d5f1ce2169245956e96fa709109": "e17e957e8cd374f40adff88a915ccd4e",
".git/objects/1e/6d49559f9f4712b8fb94919606d1b776c9e4be": "8e7cc6f0faa3cabc6f20e8b0b3105c24",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/23/456b2a7a7f71bfa0212d43cfc75a3f79ed1d28": "4182ce33d8ac43835803c422ec434cba",
".git/objects/4f/42408d741b9a7f949032a5d2d657d3c2980da0": "21da3ee41898a4ac427e20bc93ce16d3",
".git/objects/15/56952e6357475612bad9ee9a168bab5f044a43": "c9a3b349a533f4146733a52851d4a56f",
".git/objects/85/012607b4e194fe830c0dc7b05323e8959bdbbe": "a25d0c264a5eee35a9a90c2ace97bd63",
".git/objects/85/f8b517288c2d42a988ed09e8f18c846308e808": "5397e6a97f82a85bdbe0ff38aecf4f7f",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1c/f39dd1b23689f0e4718f7f65291f43d99e3969": "ea46c57fe90e5f351822b6bbe0096c38",
".git/objects/82/9287fdc8a55d2cfd0897e773e11d26bd10f2ac": "86267f5e26d68f5f8fce6c6755d61cd1",
".git/objects/49/7152f2c9b84255a5dac84f027bd670116bdefc": "31345e2fbde6b9b1a74e9816d37d9f54",
".git/objects/49/5dd237160c38fa6d44b7b4084ed862c38e42b1": "42421ebcb464d57bc540a5846dbd23c3",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/47/553caf064d61e9fab6f4f705d800003365812e": "15c11c5cb001232e91435672a9ae8fe9",
".git/objects/8b/22b89fc74e7a0df64bc73bab8b1bc111241db1": "b2f00b2ff8eed488c9ad6879038a74ab",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d67d924ffd2ab4fca907593370938f82",
".git/logs/refs/heads/test": "2c5615a28f89f64277cc31ccd39c1fe9",
".git/logs/refs/heads/main": "f25f9f43ed67e0a26d59d82a463c9b6f",
".git/logs/refs/remotes/iWakeWebsites/main": "e02c2449698565a22f7880cf648a4da7",
".git/logs/refs/remotes/tfw/main": "4c10e1e39fbecef95bcec12c6b3a7a54",
".git/logs/refs/remotes/origin/test": "39d49cb0822ad722e99be19f48e0707d",
".git/logs/refs/remotes/origin/main": "558ebc5e1056eff4d3e123ed456052a0",
".git/logs/refs/stash": "ae176272f7b2516f562da18b7a67bdf8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/test": "090875c3e36141f3623490edf6419dd3",
".git/refs/heads/main": "090875c3e36141f3623490edf6419dd3",
".git/refs/remotes/iWakeWebsites/main": "6c1e71a23aef3634079344d587a93eaf",
".git/refs/remotes/tfw/main": "2a2d54406065cd4274977874b471887a",
".git/refs/remotes/origin/test": "090875c3e36141f3623490edf6419dd3",
".git/refs/remotes/origin/main": "090875c3e36141f3623490edf6419dd3",
".git/refs/stash": "61de9f13ce5ba581c7cda8dccc1e8027",
".git/index": "3c61a8c61cdbd7611662f180c9c674d4",
".git/COMMIT_EDITMSG": "006b045456b2cbeedd891d71e9edd474",
".git/FETCH_HEAD": "5c1092101cbe13ddd2044532cfba2761",
".git/sourcetreeconfig": "a09d10b2e11d756802272b7bd0a85ce8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "775c24c3b96440c7c5bf75b928da5e39",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
