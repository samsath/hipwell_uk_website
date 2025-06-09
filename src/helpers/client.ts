import * as prismic from '@prismicio/client';
import { PRISMIC_ACCESS_TOKEN, PRISMIC_REPO_NAME } from '../consts.ts';
import type { HomepageDocument } from '../models/types.generated.ts';

const client = prismic.createClient(PRISMIC_REPO_NAME, {
  accessToken: PRISMIC_ACCESS_TOKEN
});

export async function getHomepage(): Promise<HomepageDocument> {
  const homepage = await client.getSingle<HomepageDocument>('homepage');
  return homepage;
}

