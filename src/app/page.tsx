import { Media } from "@/lib/media";

const pic1 =
  "https://images.unsplash.com/photo-1712510795837-683b93b2b95e?q=80&w=4096&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const bunny =
  "https://images.unsplash.com/photo-1452857297128-d9c29adba80b?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const imageHoverCaption = () => {
  return (
    <span className="mt-auto font-bold text-sm text-white">Text on hover</span>
  );
};

const videoHoverCaption = () => {
  return (
    <span className="mt-auto font-bold text-sm text-white">Text on hover</span>
  );
};

export default function Home() {
  return (
    <main className="container grid grid-cols-1 gap-4 pt-20 sm:grid-cols-2 md:grid-cols-4">
      <Media.Root className="w-40">
        <Media.Image
          hoverCaption={imageHoverCaption()}
          className=""
          width={160}
          height={160}
          src={pic1}
          alt="Picture 1"
        />
      </Media.Root>

      <Media.Root className="w-[250px]">
        <Media.Video
          thumbnail={{
            src: bunny,
            alt: "Picture 1",
            width: 160,
            height: 160,
          }}
          className=""
          hoverCaption={videoHoverCaption()}
        />
      </Media.Root>
    </main>
  );
}
