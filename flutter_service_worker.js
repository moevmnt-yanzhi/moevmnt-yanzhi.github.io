'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "97d4c89fa1880446c8d3f681a52d7fe6",
"index.html": "d5f2f703790df05298bf212cd9c68bb7",
"/": "d5f2f703790df05298bf212cd9c68bb7",
"main.dart.js": "293c88302ce2ac079dd4cae873d17344",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "837267541d2d21a23afd6de01c8d1921",
".git/config": "78e4f49708d39fda210e9ef722d6312a",
".git/objects/03/1ad5c6b92b89a7e41ddaf83d7eff2d9076a94b": "8946c02e6a48fcf3a0d40247615561cd",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/6a/b68bcfbb8c780624696c8609682cdb18c5384e": "1fe8397272bd688bd6c552db295ad3cb",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/304214365d5952c0911a4cc81405448393a925": "3b7c82a469060326f3d60440c2ed92e2",
".git/objects/3c/a7bb913d65e310208109d589c2a7ebca9be88d": "3a20367443b0105475bb12c601e9116c",
".git/objects/67/58bfd6a4bb8944791395415e49f457984b355f": "b40036d990c7ad8e41591da24d0a2963",
".git/objects/94/a3ca470c99f5b6371271db359da7d2e9cb60a7": "c7b86ad071498ba1bd56c05cae9b97e4",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/ad/0266c2ad962a384bc781072e3472d905893faa": "cfc60c4216bcb57ef47186599660beac",
".git/objects/be/0f46e341da226fc90851f934ebb25d74f0f0f0": "59f9bc3716710f87c02a55f32c7f312c",
".git/objects/a5/735e33e07d556c7c9bf5766b282d382effe627": "a48cc293aef6600311471c85be9c2fef",
".git/objects/d1/0e76dcd13bce8da7702f8513c33ab141d3b74f": "53cdd1b3375261d0049343467b2af46b",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c8/dd7da560940de0d118812dc5cad5dbcce45666": "0a35b1f202608014b665e3d38624a02e",
".git/objects/c8/b9f4c723166286fdc4dcfd0317062e65c3605e": "2eb560158e684e5d3e773f931048f84b",
".git/objects/c8/c90b7c2c97e1f78ab3c09687d0d7f9a2a60cae": "4d51cc92b66c7944539ec97202c36527",
".git/objects/c6/e0d5f8827051c93e67870fa3e33bb6e536e60b": "9e15ca94ead967cb376cc2e943bc3fc1",
".git/objects/20/7a77188906fea56e6669d37bfb2bb852e5eeee": "32a02e6c0f330b6d738a07c7bf648d55",
".git/objects/27/893bdb6d92593da921e61fea951d0fc55487d8": "f98bf1cde69102aec6b243c4071d4634",
".git/objects/27/4c25fa23053d30a74d448913571bd85b605d00": "256a6e83827b1dec9db856841e7863e4",
".git/objects/89/fea6ba76bb9e5cd94c4bc1d1aacb0991f1954c": "b2e00e52740616597b5a3842329b831a",
".git/objects/87/1a9dd22e65367718b2de4909bf8e4c462d69e3": "892a6711c604b80502f6045865093dbb",
".git/objects/74/38ce914ae316ba4ec2003895fb5bfecba6fd1a": "5d12c8f054268cf874337f97c820d40b",
".git/objects/17/5175d3d9ddefa555635b44b35f6119fbb5ad19": "a3a2654edf497018fea3407fba9e3c2d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/f30106c6b4e3030665fc7ac2ea5416e940aa82": "a9c0f220a2c1a8da1f08c92fcda0bc3d",
".git/objects/26/30b28c4a86f1d7144b8c9f844569711e83f696": "5330161966cb8f861cb82231824b59cf",
".git/objects/21/ec84dcf470266b6369c092c6c9f988c563f71c": "5517c9b8054651b71469768c7a31ed14",
".git/objects/86/8a43f68a377badbe0e7049e25671df380d7db0": "56b17aeccd7eb8df4179e456122c10f2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/944443935b6e5b538b2a27f4409d1cb0b6e60c": "f0ed29422e2fa1097c1d5f87375fc229",
".git/objects/00/6ad1c027ac166798dcba664561b5e655f83bab": "be59937e2ac5c7ab34e0b9fde78ee046",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/5c/29991b4e7538a4e2e09b400ece965fc45e36fa": "b39d6af2f8d6ad79cbc1f4ea8e5b759a",
".git/objects/65/1ebcd66b7263db071a675be6a55ad0f9a5dc9e": "8d19045b181a31e75fff3b6b2811f2b1",
".git/objects/62/199dbd48e3ddfa804e549c67de1c8bba17da2e": "9fe65712b6069737bf5d12c5eec98725",
".git/objects/62/87a53eda25b8abce3c7be091e452b887e7f193": "d5978c6505126256ec2533be778b20df",
".git/objects/30/f5d3ca603ea9324c9c664f0e222c48c37c4a21": "01b128ce74191c281f3b718a44fd30c4",
".git/objects/08/fe3e26396e734167b642815476f5c64f5d6e81": "f1ec767d9cd44ef2be52ac51379c0051",
".git/objects/0f/946fda95e5b835ea3a47809bd38ee897ec7ff9": "8c077ed6f8db60a6970f2a7eac4f2153",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/ba/08497a8920c8768c46acc0a293dfd093c1fc9c": "f7c080b14e50086f384301f8bc5b715a",
".git/objects/b8/22aa30a5905092d81e330589b6f427cb24d29e": "e19dc381f08eac349acd66a9e778934a",
".git/objects/b6/6ed2ac727d82ddb5c3fe1f322c778fb29675be": "0a190d768d39307dad20b5a0e1f14477",
".git/objects/a9/4fbcdf456215bb4b515de41587fb483784c47f": "4499157a1ca1ce557cfd3ad222520614",
".git/objects/b7/6393b8a76c85ac4a6d4fb9f1dd5831b38a1274": "cfc00527050c6b14b9684dd96c774960",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c4/108dd80063d5f447d57e90084953adc116518e": "d5b95b79bb7cbec67b70f79f7a21cf2b",
".git/objects/cd/cedeaa10f059c9fa1a5493be7184bc57c46354": "5ced67383ad40e00890feed8fbbf988c",
".git/objects/f9/51d69bc3f43ba50cd83c6a2878babf2a2fd3fc": "e656d3b05e7b579cf8df1a37470f2d64",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/24/a23f7ad77d6d0533925813860f217effc77fb8": "0d0e1a27f0fa86c9b15b85717ab53004",
".git/objects/8d/5764943e91b2758d1e0f8514dd94abcef4024a": "d1c5a7b0c2895adab6280f367154bde1",
".git/objects/71/846f9314c8b1bc5e5c7cd7d6ac7466f49fc035": "12cda4f8767db83bfc8994e61caa1000",
".git/objects/7f/4954409aa3059f8a4c8ce37a913b973c25000c": "1ca634a24c827724e8d31894e1ac1d76",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d1a91283e3a0a60426bb57ce61662c29",
".git/logs/refs/heads/master": "d1a91283e3a0a60426bb57ce61662c29",
".git/logs/refs/remotes/origin/master": "2bfefbff70ba502fa92f186a2485ea11",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/refs/heads/master": "876ef8c60cbb51d294479b2ec2c10d6e",
".git/refs/remotes/origin/master": "876ef8c60cbb51d294479b2ec2c10d6e",
".git/index": "bc5ff7f06c09d64ab99a487e11a5de54",
".git/COMMIT_EDITMSG": "9e56df7b69ec88d2a0d8c5bf729ae33c",
"assets/AssetManifest.json": "160773f5365bfaf445c48972e116dd24",
"assets/NOTICES": "6c120123eb37a7329f4d2bd5e84926a4",
"assets/FontManifest.json": "a98e016f0cdf39c60c28e8f4895fec66",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/Nunito-Regular.ttf": "d8de52e6c5df1a987ef6b9126a70cfcc",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/Nunito-Italic.ttf": "380d3172fab0055a8d74ab12636f5a9b",
"assets/assets/images/repair-icon.svg": "beb41b61384b86a7a2feaae27f3a4ef8",
"assets/assets/images/lock-animation.svg": "574e3ef21ff4f957d611426266323cde",
"assets/assets/images/core-lock.svg": "f779d45cbeca428f164eb7cc1b57d879",
"assets/assets/images/unlock-animation.svg": "244fc708683c42aa97d291db6e63bff4",
"assets/assets/images/bike-instruction.png": "92f7eb71c27ed61e6ebfd10c4f367141",
"assets/assets/images/history-icon.svg": "007b4a17ce7f19b55f41c07c34206c6c",
"assets/assets/images/moev-marker.svg": "8f99366dd4376c68cba9c3ce150b8442",
"assets/assets/images/bike-icon.svg": "b4031588d7259ca299f86d8a55c5f78f",
"assets/assets/images/core-hold.svg": "c5e3ceaa3f20d17aca2dc7cc0f1a6c94",
"assets/assets/images/bike-instruction.svg": "7926d3f8bfd2ee75dcc79e51bfca04b1",
"assets/assets/images/moev-circle-blue.svg": "ac697141d08f83cc9216e9ce21b3b74c",
"assets/assets/images/selected-marker.svg": "334f82f7cbe6049b1f8f57f22bd1d454",
"assets/assets/images/helmet-icon.svg": "ad142804812e26502292c560e7429121",
"assets/assets/images/closed-kiosk-marker.svg": "245751307aad2512be8471af160e6f70",
"assets/assets/images/venom-bike.svg": "d285383e7538220df784f8c8c89edec5",
"assets/assets/images/core-unconnected.svg": "1b546cb89b5c7d2cd4755aa432c3775b",
"assets/assets/images/reward-icon.svg": "9d59d49c95bb6fd2fd57bfd402b76596",
"assets/assets/images/moevone-white.jpeg": "99794ce4096f5c98d15d80ea4c127c0c",
"assets/assets/images/error.svg": "7e2883473761e41620c41875d7871e1e",
"assets/assets/images/venom-bike.png": "d51744ba271da10c072d91ed9e93a2fa",
"assets/assets/images/logo.svg": "e1f694424a5f76e297b8f241994ecf42",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
