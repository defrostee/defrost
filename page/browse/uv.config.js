self.__uv$config = {
  prefix: '/service/',
  bare: 'https://eugenex-server.onrender.com/bare/',
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: '/page/browse/uv.handler.js',
  bundle: 'https://cdn.jsdelivr.net/npm/@titaniumnetwork-dev/ultraviolet@latest/dist/uv.bundle.js',
  config: '/page/browse/uv.config.js',
  sw: '/page/browse/uv.sw.js',
};
