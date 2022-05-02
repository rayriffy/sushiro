import { Component, createMemo, createSignal } from 'solid-js'

import { QR } from './qr'
import { R } from './r'
import { PriceGrid } from '../../core/components/priceGrid'

import { useCalculate } from '../services/useCalculate'

export const App: Component = () => {
  const [red, setRed] = createSignal<string>('0')
  const [silver, setSilver] = createSignal<string>('0')
  const [gold, setGold] = createSignal<string>('0')
  const [black, setBlack] = createSignal<string>('0')

  const total = useCalculate(red, silver, gold, black)
  const totalWithServiceCharge = createMemo(() => total() * 1.1)

  return (
    <>
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
            <R />
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
                  {totalWithServiceCharge().toLocaleString()}฿
                </span>
              </p>
              <p className="text-sm text-gray-600 font-extralight">
                <span className="font-medium">{total().toLocaleString()}฿</span>{' '}
                w/o 10% charges
              </p>
            </div>
            <div className="flex items-center">
              <a
                href={`https://ppqr.app/?amount=${totalWithServiceCharge().toFixed(
                  2
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <QR />
              </a>
            </div>
          </div>
        </div>
      </main>
      <footer className="pt-10 pb-8 text-gray-400">
        <p className="text-center text-xs sm:text-sm">&copy; 2022 rayriffy</p>
      </footer>
    </>
  )
}
