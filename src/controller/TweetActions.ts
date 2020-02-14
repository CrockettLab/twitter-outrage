import { Context } from 'koa';
import { LessThan } from 'typeorm';
import { getRepository } from './utils';
import sampleSize = require('lodash.samplesize');
import { Tweet } from '../entity/Tweet';

const getTweets = async (ctx: Context) => {
  const tweets = await getRepository(Tweet).find({
    where: { active: true, ratings: LessThan(20) },
    take: 1000,
    cache: 3600000,
  });

  ctx.body = sampleSize(tweets, 30);
};

export { getTweets };
