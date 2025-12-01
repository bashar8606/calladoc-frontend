"use client"
import Image from "@/components/Image/image";
import { Card, CardContent } from "@/components/ui/card";
import useHeaderSecondary from "@/hooks/useHeaderSecondary";
import { Calendar, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoHomeOutline } from "react-icons/io5";

// export default function DetailWidget({ data }) {
//   useHeaderSecondary(true)
//   const pathname = usePathname()
//   const pathSegments = pathname.split('/');
//   const cat = pathSegments[2].charAt(0).toUpperCase() + pathSegments[2].slice(1);

//   const url = `${process.env.NEXT_PUBLIC_DOMAIN}${pathname}`
//   const text = "Check out this post!"
//   const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
//   const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
//   const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
//   const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}%20${encodeURIComponent(url)}`;

// console.log(data,"datadatadatadata");

//   return (
//     <section className={`overflow-hidden bg-slate-50 pt-14  pb-12 2xl:pt-[120px] 2xl:pb-[100px]`} id="DetailWidget">
//       <div className="container">
//         <div className="2xl:px-24 mb-8">
//           <p className=" text-blue-600 text-base font-semibold  leading-none mb-2"><Link href={`/`} className="uppercase">HOME</Link> / <Link href={`/${cat}`} className="uppercase">{cat}</Link></p>
//           <div className="grid grid-cols-12 lg:gap-x-5 gy-3 items-end">
//             <div className="col-span-12 lg:col-span-9">
//               <h1 className="  text-3xl lg:text-5xl xl:text-6xl font-semibold  lg:leading-normal xl:leading-tight bg-gradient-to-r from-[#242E49]  to-[#5B95F9] bg-clip-text text-transparent font-condensed mb-1 lg:mb-1">{data?.title}</h1>
//               <div className="text-neutral-700 text-base">{data?.date && `Published on ${new Date(data?.date).toLocaleDateString('en-GB')}`}</div>
//             </div>
//             <div className="col-span-12 lg:col-span-3">
//               <div className="lg:text-end">
//                 <a className="inline-block px-2 py-1 me-1 text-[#969696]" href={facebookShareUrl} target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
//                 <a className="inline-block px-2 py-1 me-1 text-[#969696]" href={twitterShareUrl} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
//                 <a className="inline-block px-2 py-1 me-1 text-[#969696]" href={linkedInShareUrl} target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
//                 <a className="inline-block px-2 py-1 me-1 text-[#969696]" href={whatsappShareUrl} target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="aspect-[1454/548] bg-slate-200 relative">
//         {data?.cover?.url&& <Image src={`${data?.cover?.url}`} className="object-cover" fill alt={data?.title} />}
//         {/* {data?.videoUrl ? (
//           <iframe
//             className="absolute top-0 left-0 w-full h-full"
//             src={data?.videoUrl.replace("watch?v=", "embed/")}
//             title={data?.title}
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             style={{
//               width:' 917px',
//               height: '516px',
//               left: '225px',
//               top: '0px',
//             }}
//           ></iframe>
//         ) : (
//           data?.cover?.url && (
//             <Image
//               src={`${data?.cover?.url}`}
//               className="object-cover"
//               fill
//               alt={data?.title}
//             />
//           )
//         )} */}
//         </div>

//         <div className="2xl:px-24 py-14">
//           <div className="grid grid-cols-12 lg:gap-x-10">
//             <div className="col-span-9"><div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: data?.content }}></div></div>
//             <div className="col-span-3">
//               <div className="text-blue-600 text-2xl font-semibold mb-2">{cat}</div>
//               {data?.items?.map((item, i) => {
//                 return (
//                   <Link key={i} href={`${item?.slug}`} className="py-3 block  border-b border-neutral-300">
//                     <div className="grid grid-cols-12 gap-x-3 items-center">
//                       <div className="col-span-4">
//                         <div className="aspect-[1/1] relative">
//                           <Image src={`${item?.thumb?.url?? ""}`} className="object-cover" fill alt={item?.title} />
//                         </div>
//                       </div>
//                       <div className="col-span-8">
//                         <h3 className="text-black text-lg font-medium font-condensed line-clamp-2">{item?.title}</h3>
//                         <p className="text-zinc-600/90 text-sm  leading-snug line-clamp-2">{item?.description}</p>
//                       </div>
//                     </div>

//                   </Link>
//                 )
//               })}
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }


// Component to render rich text with basic markdown support
function RichTextBlock({ body }) {
  const parseMarkdown = (text = "") => {
    return text
      .replace(/## (.*)/g, '<h2 class="text-2xl font-bold mb-4 mt-6">$1</h2>')
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/- (.*)/g, '<li class="ml-4">$1</li>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 hover:underline">$1</a>');
  };

  return (
    <div
      className="prose prose-lg max-w-none mb-6"
      dangerouslySetInnerHTML={{ __html: parseMarkdown(body || "") }}
    />
  );
}


// Component to render quote blocks
function QuoteBlock({ title, body }) {
  return (
    <Card className="my-8 border-l-4 border-l-primary">
      <CardContent className="p-6">
        <blockquote className="text-lg italic text-muted-foreground mb-2">"{body}"</blockquote>
        <cite className="text-sm font-medium">— {title}</cite>
      </CardContent>
    </Card>
  )
}

// Component to render single media blocks
function MediaBlock({ file }) {
  const imageUrl = file.formats?.large?.url || file.formats?.medium?.url || file.url

  return (
    <div className="my-8">
      <div className="aspect-[16/9] relative rounded-2xl overflow-hidden shadow-md">
      <Image
        src={file?.url}
        alt={file.alternativeText || file.caption || file.name}
        fill
        className="object-cover "
      />
      </div>
      {file.caption && <p className="text-sm text-muted-foreground mt-2 text-center italic">{file.caption}</p>}
    </div>
  )
}

// Component to render image sliders
function SliderBlock({ files }) {
  return (
    <div className="my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {files.map((file, index) => (
          <div key={file.id || index} className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-md">
            <Image
              src={file.url}
              alt={file.alternativeText || file.caption || file.name}
              fill
              className="  object-cover "
            />
            {file.caption && <p className="text-sm text-muted-foreground mt-2 text-center italic">{file.caption}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

// Main component to render dynamic blocks
function DynamicBlocks({ blocks }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, index) => {
        switch (block.__component) {
          case "shared.rich-text":
            return <RichTextBlock key={`3${index}`} body={block.body1} />
          case "shared.quote":
            return <QuoteBlock key={`2${index}`} title={block.title} body={block.body} />
          case "shared.media":
            return <MediaBlock key={`1${index}`} file={block.file} />
          case "shared.slider":
            return <SliderBlock key={`q${index}`} files={block.files} />
          default:
            return null
        }
      })}
    </div>
  )
}

export default function DetailWidget({ data }) {
  // In a real app, you would fetch the blog data based on params.slug
  const blogData = data

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const pathname = usePathname(); // or const { pathname } = useLocation();
  
  // Generate breadcrumb items from pathname
  const pathSegments = pathname.split('/').filter(Boolean);

  return (
    <section className={`overflow-hidden bg-slate-50 pt-3  pb-12 2xl:pt-10 2xl:pb-[100px]`} id="DetailWidget">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header Section */}
        <div className="mb-8">

        <nav className=" mb-4 flex items-center text-xs text-blue-700/80 font-medium" aria-label="Breadcrumb">
      <ol className="inline-flex items-center ">
        {/* Home - Always present */}
        <li>
          <a href="/" className="hover:underline flex items-center">
            <IoHomeOutline className="me-1" />
            Home
          </a>
        </li>
        
        {/* Dynamic segments */}
        {pathSegments.map((segment, index) => {
          const href = '/' + pathSegments.slice(0, index + 1).join('/');
          const isLast = index === pathSegments.length - 1;
          
          // Use title from data for the last segment if available
          const label = decodeURIComponent(segment).replace(/-/g, ' ')
          
          return (
            <li key={href} className={isLast ? 'truncate max-w-[120px] md:max-w-[200px]' : ''}>
              <span className="mx-0.5 text-blue-700/40">/</span>
              <Link
                href={href} 
                className={`hover:underline capitalize ${isLast ? 'text-blue-900 font-semibold' : ''}`}
                {...(isLast && { 'aria-current': 'page' })}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>



          <div className="flex items-center gap-4 mb-4">
          {blogData?.category?.name&&<div variant="secondary" className="capitalize">
              {blogData?.category?.name}
            </div>}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(blogData?.createdAt)}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <User className="w-4 h-4" />
              <span>{blogData?.author?.name}</span>
            </div>  
          </div>

          <h1 className="text-4xl font-bold mb-4 leading-tight">{blogData?.title}</h1>

          <p className="text-xl text-muted-foreground mb-6">{blogData?.description}</p>
        </div>

        {/* Cover Image */}
        {blogData?.cover && (
          <div className="mb-8">
                 <div className="aspect-[1454/770] bg-slate-200 relative rounded-2xl overflow-hidden shadow-lg">
            <Image
            fill
              src={blogData?.cover?.url}
              alt={blogData.cover?.alternativeText || blogData?.title}
              className="object-cover "
            />
             </div>
            {blogData?.cover?.caption && (
              <p className="text-sm text-muted-foreground mt-2 text-center italic">{blogData.cover.caption}</p>
            )}
          </div>
        )}

        {/* Dynamic Content Blocks */}
        <article className="prose prose-lg max-w-none">
          <DynamicBlocks blocks={blogData?.blocks} />
        </article>

        {/* Author Info */}
        <Card className="mt-12">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                {blogData?.author?.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-semibold">{blogData?.author?.name}</h3>
                <p className="text-sm text-muted-foreground">{blogData?.author?.email}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
