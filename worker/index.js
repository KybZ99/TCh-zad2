const keys = require("./keys");
const redis = require("redis");

const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000,
});
const sub = redisClient.duplicate();

//function fib(index) {
//  if (index < 2) return 1;
//  return fib(index - 1) + fib(index - 2);
//}

function ciag_geo(index) {
  const a1 = 1;
  const q = 3;

  if (index >= 10) return 1;
  else if (index == 1) return a1;
  else return a1 * Math.pow(q, index - 1);
}

sub.on("message", (channel, message) => {
  redisClient.hset("values", message, ciag_geo(parseInt(message)));
});
sub.subscribe("insert");
