import { useState } from 'react'
import { NextPage } from 'next'

import { QrcodeIcon } from '@heroicons/react/outline'

import { R } from '../core/components/r'
import { useCalculate } from '../core/services/useCalculate'
import { PriceGrid } from '../core/components/priceGrid'

const Page: NextPage = () => {
  const [red, setRed] = useState<string>('0')
  const [silver, setSilver] = useState<string>('0')
  const [gold, setGold] = useState<string>('0')
  const [black, setBlack] = useState<string>('0')

  const { total, withoutCharge } = useCalculate(red, silver, gold, black)

  return (
    <main className="mx-auto max-w-md pt-12 px-6">
      <div className="flex items-center mb-6">
        <p className="text-gray-700 font-bold text-xl leading-none">
          SUSHIRO calculator
        </p>
        <div className="mx-4 h-6 border-l-2 border-gray-300" />
        <a
          href="https://rayriffy.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <R className="h-8 w-auto fill-gray-700 dark:fill-white" />
        </a>
      </div>

      <div className="space-y-6">
        <div>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <PriceGrid
              primaryColor="bg-rose-700"
              secondaryColor="bg-rose-600"
              price={40}
              setter={setRed}
            />
            <PriceGrid
              primaryColor="bg-slate-400"
              secondaryColor="bg-slate-300"
              price={60}
              setter={setSilver}
            />
            <PriceGrid
              primaryColor="bg-yellow-600"
              secondaryColor="bg-yellow-500"
              price={80}
              setter={setGold}
            />
            <PriceGrid
              primaryColor="bg-slate-800"
              secondaryColor="bg-slate-700"
              price={120}
              setter={setBlack}
            />
          </div>
        </div>
        <div className="bg-white shadow rounded-xl border px-4 py-5 sm:p-6 flex justify-between">
          <div>
            <p>
              <span className="font-bold text-2xl">Total:</span>{' '}
              <span className="text-2xl font-light pl-2">
                {total.toLocaleString()}฿
              </span>
            </p>
            <p className="text-sm text-gray-600 font-extralight">
              {withoutCharge.toLocaleString()}฿ without service charges
            </p>
          </div>
          <div className="flex items-center">
            <a
              href={`https://ppqr.app/?amount=${total}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <QrcodeIcon className="w-12 h-12 text-gray-900" />
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Page
