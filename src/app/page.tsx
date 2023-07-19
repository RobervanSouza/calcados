import Image from 'next/image'
import styles from './page.module.css'
import Categorias from '@/components/header/categorias'
import MaisVendidos from '@/components/maisVendidos/maisVendido'

export default function Home() {
  return (
    <main className={styles.main}>
     <MaisVendidos/>
    </main>
  )
}
