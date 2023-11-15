import { BlogCard } from "../components/BlogCard";


const Blogs = () => {
  return (
    <section class="mt-24 mx-auto text-gray-400 bg-black body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </section>
  );
};

export default Blogs;
