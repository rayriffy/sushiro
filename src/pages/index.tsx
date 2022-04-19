import { NextPage } from 'next'

import { QrcodeIcon } from '@heroicons/react/outline'

import { R } from '../core/components/r'
import { useCalculate } from '../core/services/useCalculate'
import { useRef, useState } from 'react'

const Page: NextPage = () => {
  const [red, setRed] = useState<string>('0')
  const [silver, setSilver] = useState<string>('0')
  const [gold, setGold] = useState<string>('0')
  const [black, setBlack] = useState<string>('0')

  const {
    total,
    withoutCharge
  } = useCalculate(
    red,
    silver,
    gold,
    black,
  )

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
            <div className="col-span-1 bg-white shadow rounded-md border px-4 py-5 sm:p-6">
              <div className="relative w-20 h-20 bg-rose-700 rounded-full flex justify-center items-center mx-auto shadow">
                <div className="w-16 h-16 bg-rose-600 rounded-full"></div>
              </div>
              <h2 className="text-center font-semibold text-xl my-2">40฿</h2>
              <input
                type="number"
                inputMode="numeric"
                name="sushi-40"
                id="sushi-40"
                defaultValue={0}
                onChange={event => setRed(event.target.value)}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="0"
              />
            </div>
            <div className="col-span-1 bg-white shadow rounded-md border px-4 py-5 sm:p-6">
              <div className="relative w-20 h-20 bg-slate-400 rounded-full flex justify-center items-center mx-auto shadow">
                <div className="w-16 h-16 bg-slate-300 rounded-full"></div>
              </div>
              <h2 className="text-center font-semibold text-xl my-2">60฿</h2>
              <input
                type="number"
                inputMode="numeric"
                name="sushi-60"
                id="sushi-60"
                defaultValue={0}
                onChange={event => setSilver(event.target.value)}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="0"
              />
            </div>
            <div className="col-span-1 bg-white shadow rounded-md border px-4 py-5 sm:p-6">
              <div className="relative w-20 h-20 bg-yellow-600 rounded-full flex justify-center items-center mx-auto shadow">
                <div className="w-16 h-16 bg-yellow-500 rounded-full"></div>
              </div>
              <h2 className="text-center font-semibold text-xl my-2">80฿</h2>
              <input
                type="number"
                inputMode="numeric"
                name="sushi-80"
                id="sushi-80"
                defaultValue={0}
                onChange={event => setGold(event.target.value)}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="0"
              />
            </div>
            <div className="col-span-1 bg-white shadow rounded-md border px-4 py-5 sm:p-6">
              <div className="relative w-20 h-20 bg-slate-800 rounded-full flex justify-center items-center mx-auto shadow">
                <div className="w-16 h-16 bg-slate-700 rounded-full"></div>
              </div>
              <h2 className="text-center font-semibold text-xl my-2">120฿</h2>
              <input
                type="number"
                inputMode="numeric"
                name="sushi-120"
                id="sushi-120"
                defaultValue={0}
                onChange={event => setBlack(event.target.value)}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="0"
              />
            </div>
          </div>
        </div>
        <div className="bg-white shadow rounded-xl border px-4 py-5 sm:p-6 flex justify-between">
          <div>
            <p>
              <span className="font-bold text-2xl">Total:</span>{' '}
              <span className="text-2xl font-light pl-2">{total.toLocaleString()}฿</span>
            </p>
            <p className="text-sm text-gray-600 font-extralight">
              {withoutCharge.toLocaleString()}฿ without service charges
            </p>
          </div>
          <div className="flex items-center">
            <a
              href="https://ppqr.app"
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
