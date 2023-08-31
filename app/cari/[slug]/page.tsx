import React, { Suspense } from "react";
import FollowersList from "./sectionFollowers";

// Fetching data di server component
async function getDataUser(params: string) {
  const res = await fetch(`https://api.github.com/users/${params}`);
  return res.json();
}

async function getDataRepos(params: string) {
  const res = await fetch(`https://api.github.com/users/${params}/repos`);
  await new Promise((r) => setTimeout(r, 2000)); // Untuk memberi jarak delay saat pengambilan datanya selama 2 detik
  return res.json();
}

// Sequential Data Fetching
const RepoList = async ({ slug }: any) => {
  const dataRepos = await getDataRepos(slug);
  return (
    <>
      <p>List Repositori</p>
      <div>{JSON.stringify(dataRepos)}</div>
    </>
  );
};

export default async function DetailCari({
  params,
}: {
  params: { slug: string };
}) {
  // Ini untuk mengambil data secara paralel (Parallel Data Fetching) Cara 1
  const dataUser = await getDataUser(params.slug);
  // const dataRepos = await getDataRepos(params.slug);

  // Ini untuk mengambil data secara paralel (Parallel Data Fetching) Cara 2
  // const dataUser = getDataUser(params.slug);
  // const dataRepos = getDataRepos(params.slug);
  // const [user, repos] = await Promise.all([dataUser, dataRepos]);

  return (
    <div>
      {/* Parallel Data Fetching */}
      Detail User :<p>{JSON.stringify(dataUser)}</p>
      <br />
      <br />
      {/* Sequential Data Fetching */}
      <Suspense fallback={<div>Sedang mengambil repositori...</div>}>
        <RepoList slug={params.slug} />
      </Suspense>
      {/* Blocking Rendering in a Route */}
      <Suspense fallback={<div>Sedang mengambil followers...</div>}>
        <FollowersList slug={params.slug} />
      </Suspense>
    </div>
  );
}
