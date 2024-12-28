import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="py-32">
      <div className="container text-center">
        <div className="mx-auto flex max-w-screen-lg flex-col gap-6">
          <h1 className="text-3xl font-extrabold lg:text-6xl">
            Your website is slow and insecure,{" "}
            <span className="text-blue-500">time to change that</span>
          </h1>
          <p className="text-balance text-muted-foreground lg:text-lg">
            Authentication is super essential for your website, but if certian
            core pricinpials are not respected it can turn your website intro a
            slow and insecure mess.
          </p>
        </div>
        <Button size="lg" className="mt-10">
          Get Started
        </Button>
      </div>
    </section>
  );
}
