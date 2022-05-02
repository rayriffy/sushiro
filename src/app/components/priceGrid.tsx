import { Component, Setter } from 'solid-js'

import { classNames } from '../services/classNames'

interface Props {
  primaryColor: string
  secondaryColor: string
  price: number
  setter: Setter<string>
}

export const PriceGrid: Component<Props> = props => {
  const { primaryColor, secondaryColor, price, setter } = props

  return (
    <div className="col-span-1 bg-white shadow rounded-md border px-4 py-5 sm:p-6">
      <div
        className={classNames(
          primaryColor,
          'relative w-20 h-20 rounded-full flex justify-center items-center mx-auto shadow'
        )}
      >
        <div
          className={classNames(secondaryColor, 'w-16 h-16 rounded-full')}
        ></div>
      </div>
      <h2 className="text-center font-semibold text-xl my-2">{price}฿</h2>
      <input
        type="number"
        inputMode="numeric"
        name={`sushi-${price}`}
        id={`sushi-${price}`}
        onInput={event => {
          setter(
            event.currentTarget.value === '' ? '0' : event.currentTarget.value
          )
        }}
        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
        placeholder="0"
      />
    </div>
  )
}
