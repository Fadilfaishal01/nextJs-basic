async function getDataFollowers(params: string) {
  const res = await fetch(`https://api.github.com/users/${params}/followers`);
  await new Promise((r) => setTimeout(r, 2000)); // Untuk memberi jarak delay saat pengambilan datanya selama 2 detik
  return res.json();
}

const FollowersList = async ({ slug }: any) => {
  const dataBranch = await getDataFollowers(slug);

  return (
    <>
      <p>List Followers</p>
      <div>
        <ul>
          {dataBranch &&
            dataBranch.map((followers: any, index: number) => {
              return <li key={index}>{followers.login}</li>;
            })}
        </ul>
      </div>
    </>
  );
};

export default FollowersList;
