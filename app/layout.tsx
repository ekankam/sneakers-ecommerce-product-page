import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='text-16 w-full max-w-[1440px] min-w-[375px] min-h-screen font-normal bg-custom-white mx-auto'>{children}</body>
    </html>
  )
}
