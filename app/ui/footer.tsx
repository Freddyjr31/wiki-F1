export default function Footer(){
    return(
        <footer>
          <section>
            <div className='flex flex-row h-64 bg-neutral-900 py-10 px-20'>
              <div className="flex w-6/12">
                <p className='text-white'>
                  by Freddy Bernal
                  </p>
              </div>
              <div className="flex flex-col w-6/12">
                <h3 className='font-bold text-white'>Contacto:</h3>
                <ul className='text-white'>
                  <li>+58 4247464407</li>
                  <li>freddydbg31</li>
                </ul>
              </div>
            </div>
          </section>
        </footer>
    )
}