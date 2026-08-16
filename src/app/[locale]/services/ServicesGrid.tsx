'use client';

import Image from 'next/image';
import { useState } from 'react';

import { serviceGroupOrder, services, type ServiceGroup } from '@src/lib/services';

type Filter = 'All' | ServiceGroup;

const filters: Filter[] = ['All', ...serviceGroupOrder];

export const ServicesGrid = () => {
  const [active, setActive] = useState<Filter>('All');

  const visible = active === 'All' ? services : services.filter(s => s.group === active);

  return (
    <>
      {/* Filter pills — horizontally scrollable on narrow screens rather than wrapping */}
      <div
        className="-mx-6 mt-10 flex gap-4 overflow-x-auto px-6 pb-2 lg:mx-0 lg:mt-12 lg:flex-wrap lg:overflow-visible lg:px-0"
        role="group"
        aria-label="Filter services by category"
      >
        {filters.map(filter => {
          const isActive = filter === active;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              aria-pressed={isActive}
              className={`flex h-10 shrink-0 items-center justify-center rounded-full border-[1.5px] px-[21.5px] font-inter text-base font-medium transition-colors ${
                isActive
                  ? 'border-primary bg-primary text-white'
                  : 'border-[#737778] text-[#737778] hover:border-primary hover:text-primary'
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map(service => (
          <div
            key={service.name}
            className="flex flex-col items-center gap-6 rounded-xl bg-white px-8 py-12 text-center shadow-card lg:min-h-[290px]"
          >
            <div className="flex h-[65px] w-[65px] shrink-0 items-center justify-center rounded-full bg-primary shadow-control">
              <Image
                src={service.icon}
                alt=""
                width={40}
                height={40}
                aria-hidden
                className="h-10 w-10 object-contain"
              />
            </div>
            <div className="flex flex-col gap-6">
              <p className="font-montserrat text-xl font-semibold text-text">{service.name}</p>
              <p className="font-inter text-base leading-[22px] text-text">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
