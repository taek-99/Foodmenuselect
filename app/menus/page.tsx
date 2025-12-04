// app/menus/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseClient'

type Menu = {
  id: number
  name: string
  cuisine: string
  main_type: string | null
  meat_type: string | null
  taste: string | null
  price_min: number | null
  price_max: number | null
  is_soup: boolean
  spicy_level: number
}

export default function MenusPage() {
  const [menus, setMenus] = useState<Menu[]>([])

  useEffect(() => {
    const fetchMenus = async () => {
      const { data, error } = await supabase
        .from('menus')
        .select('*')

     console.log('supabase result:', { data, error })
      if (error) {
        console.error('Supabase error:', error)
      } else {
        setMenus(data ?? [])
      }
    }

    fetchMenus()
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">메뉴 리스트</h1>
      <ul className="space-y-2">
        {menus.map(menu => (
          <li key={menu.id} className="border rounded p-3">
            <div className="font-semibold">{menu.name}</div>
            <div className="text-sm text-gray-600">
              {menu.cuisine} / {menu.main_type} / {menu.taste}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
