import Header from "./Header"
import Footer from "./Footer" 
import Sidebar from "./Sidebar"

export default function PageLayout({children}) {
  
    return ( 
      <main >
        <Header />
          {children}
        <Footer />
    </main>
    )
  }

  
  
  
