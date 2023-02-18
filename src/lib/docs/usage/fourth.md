## Customizing the look

You can style the component however you want by passing one of `inputStyle`, `wrapperStyle`, `separatorStyle` or add custom class names through `inputClass`, `wrapperClass`, `separatorClass`. You can also disable all the default styling by adding the `disableDefaultStyle` attribute.

Here's an example component, styled using [tailwindcss](https://tailwindcss.com/ 'Tailwind css framework')

```js
<SvelteOtp
	inputClass="rounded-md bg-gray-200"
	separatorClass="border-blue-700 text-3xl font-bold"
	separator="-"
/>
```
