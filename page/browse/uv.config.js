self.__uv$config = {
  prefix: '/service/',
  bare: 'https://eugenex-server.onrender.com/bare/',  // ← absolute URL, correct path
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: '/uv/uv.handler.js',
  bundle: '/uv/uv.bundle.js',
  config: '/uv/uv.config.js',
  sw: '/uv/uv.sw.js',
};
