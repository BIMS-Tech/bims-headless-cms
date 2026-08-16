'use client';

import { useState } from 'react';

import { allServices } from '@src/lib/services';

const fieldBase =
  'h-12 w-full rounded-md bg-white px-3 text-[13px] text-[#18181b] leading-5 ' +
  'shadow-[0_1px_2px_0_rgba(0,0,0,0.12)] ring-1 ring-black/[0.08] ' +
  'placeholder:text-[#71717a] focus:outline-none focus:ring-2 focus:ring-primary';

const ChevronDown = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#71717a]"
  >
    <path
      d="M1.55554 4.22223L5.99999 8.66667L10.4444 4.22223"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Label = ({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) => (
  <label
    htmlFor={htmlFor}
    className="font-inter text-sm font-medium text-black/40"
  >
    {children}
    <span className="text-[#db4444]">*</span>
  </label>
);

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  service: string;
}

const initialState: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
  service: '',
};

export const ContactForm = () => {
  const [form, setForm] = useState<FormState>(initialState);

  const update =
    (key: keyof FormState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm(current => ({ ...current, [key]: event.target.value }));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: no submission target wired up yet — see CLAUDE.md "Contact form".
    // The single integration point: POST `form` to wherever submissions should land.
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8 lg:gap-12">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2 lg:gap-x-12 lg:gap-y-8">
        <div className="flex flex-col gap-3">
          <Label htmlFor="firstName">First Name</Label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            autoComplete="given-name"
            placeholder="Enter your first name..."
            value={form.firstName}
            onChange={update('firstName')}
            className={fieldBase}
          />
        </div>

        <div className="flex flex-col gap-3">
          <Label htmlFor="lastName">Last Name</Label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            autoComplete="family-name"
            placeholder="Enter your last name..."
            value={form.lastName}
            onChange={update('lastName')}
            className={fieldBase}
          />
        </div>

        <div className="flex flex-col gap-3">
          <Label htmlFor="email">Email Address</Label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="Enter your email address..."
            value={form.email}
            onChange={update('email')}
            className={fieldBase}
          />
        </div>

        <div className="flex flex-col gap-3">
          <Label htmlFor="phone">Phone</Label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="Enter your phone number..."
            value={form.phone}
            onChange={update('phone')}
            className={fieldBase}
          />
        </div>

        <div className="flex flex-col gap-3">
          <Label htmlFor="message">How can we help you?</Label>
          <input
            id="message"
            name="message"
            type="text"
            required
            placeholder="Enter your message..."
            value={form.message}
            onChange={update('message')}
            className={fieldBase}
          />
        </div>

        <div className="flex flex-col gap-3">
          <Label htmlFor="service">Service interest</Label>
          <div className="relative">
            <select
              id="service"
              name="service"
              required
              value={form.service}
              onChange={update('service')}
              className={`${fieldBase} appearance-none pr-10 ${
                form.service ? 'text-[#18181b]' : 'text-[#71717a]'
              }`}
            >
              <option value="" disabled>
                Choose your service...
              </option>
              {allServices.map(service => (
                <option key={service} value={service} className="text-[#18181b]">
                  {service}
                </option>
              ))}
            </select>
            <ChevronDown />
          </div>
        </div>
      </div>

      <div className="flex justify-start md:justify-end">
        <button
          type="submit"
          className="flex h-10 items-center justify-center gap-1.5 rounded-full bg-primary px-6 font-inter text-base leading-[22px] text-white shadow-control transition-colors hover:bg-primary-dark"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};
