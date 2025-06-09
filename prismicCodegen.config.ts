import type { Config } from 'prismic-ts-codegen';

const config: Config = {
  output: './src/models/types.generated.ts',
  repositoryName: 'hipwell-uk',
  customTypesAPIToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoibWFjaGluZTJtYWNoaW5lIiwiZGJpZCI6ImhpcHdlbGwtdWstZjNiMjgxYjYtYzdkZC00ZjIxLWE0MTMtNWE4ZTc0ZjUxMmVlXzUiLCJkYXRlIjoxNzQ5NTA1ODQyLCJkb21haW4iOiJoaXB3ZWxsLXVrIiwiYXBwTmFtZSI6IndlYnNpdGUiLCJpYXQiOjE3NDk1MDU4NDJ9.RfD1H-EWGnCVe2T8qQ6Z0RD77NVki2eUbxe0lhwTtLE",
  models: {
    fetchFromRepository: true
  }
};

export default config;
