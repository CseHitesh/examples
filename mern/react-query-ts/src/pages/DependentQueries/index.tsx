import { useUserData } from "../../hooks/useUserData";
import { useChannelData } from "../../hooks/useChannelData";

type Props = { email: string };

const DependentQueries = ({ email }: Props) => {
  const { data: user, isLoading } = useUserData({ email });

  const channelId = user?.channelId;

  const { data: channel, isLoading: channelLoading } = useChannelData({
    channelId,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">
          SuperHero RTK DependentQueries
        </h1>

        <ul className="space-y-4">
          <li
            key={user?.id}
            className="p-4 border rounded shadow hover:bg-gray-100 relative"
          >
            <h2 className="text-xl font-semibold">{user?.channelId}</h2>
            <span>Channels: </span>

            {channelLoading ? (
              <span>Loading ...</span>
            ) : (
              channel?.courses.map((c) => {
                return <span key={c}>{c},</span>;
              })
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default DependentQueries;
