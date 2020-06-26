const FullLogo = ({ height }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 480 119.75'
    height={height || '3.5rem'}
  >
    <g transform='matrix(1.3333 0 0 -1.3333 0 119.75)'>
      <path
        d='M37.257 22.249V10.274l6.857.006c12.044 0 21.809 9.763 21.809 21.808 0 12.044-9.765 21.808-21.809 21.808h-6.857V41.921s1.34-.009 6.765-.009c5.424 0 9.822-4.398 9.822-9.823s-4.398-9.823-9.822-9.823c-5.425 0-6.765-.017-6.765-.017M9.186 41.918h10.143v11.979H9.186z'
        fill='#529ed6'
      />
      <path
        d='M92.689 53.241c0 .345.276.655.655.655h13.584c.379 0 .656-.31.656-.655v-1c0-.345-.277-.655-.656-.655H95.344v-9.447h9.895c.345 0 .655-.31.655-.654v-1.001c0-.345-.31-.655-.655-.655h-9.895v-9.411c0-.345-.31-.656-.655-.656h-1.345c-.379 0-.655.311-.655.656zM120.93 53.241c0 .345.275.655.655.655h1.344c.345 0 .655-.31.655-.655V32.073h9.93c.379 0 .654-.311.654-.656v-.999c0-.345-.275-.656-.654-.656h-11.929c-.38 0-.655.311-.655.656zM156.75 31.831c5.481 0 9.998 4.482 9.998 9.963 0 5.482-4.517 10.034-9.998 10.034s-9.964-4.552-9.964-10.034c0-5.481 4.483-9.963 9.964-9.963m0 22.41c6.895 0 12.411-5.551 12.411-12.447 0-6.895-5.516-12.377-12.411-12.377-6.896 0-12.377 5.482-12.377 12.377 0 6.896 5.481 12.447 12.377 12.447M181.51 33.382c.172.207.345.448.517.655.344.448.723.724 1.207.31.24-.207 2.757-2.62 5.826-2.62 2.793 0 4.62 1.758 4.62 3.792 0 2.379-2.068 3.793-6.034 5.447-3.792 1.655-6.068 3.207-6.068 7.137 0 2.345 1.862 6.137 7.344 6.137 3.378 0 5.896-1.758 5.896-1.758.206-.104.62-.517.206-1.173-.138-.206-.276-.448-.413-.655-.311-.482-.656-.62-1.207-.31-.242.138-2.414 1.586-4.517 1.586-3.654 0-4.758-2.344-4.758-3.792 0-2.311 1.759-3.655 4.654-4.862 4.656-1.896 7.655-3.654 7.655-7.653 0-3.586-3.413-6.206-7.448-6.206-4.068 0-6.826 2.379-7.274 2.792-.275.242-.621.518-.206 1.173M208.5 33.382c.173.207.345.448.517.655.344.448.724.724 1.207.31.241-.207 2.757-2.62 5.827-2.62 2.792 0 4.619 1.758 4.619 3.792 0 2.379-2.068 3.793-6.033 5.447-3.793 1.655-6.068 3.207-6.068 7.137 0 2.345 1.862 6.137 7.343 6.137 3.379 0 5.896-1.758 5.896-1.758.207-.104.621-.517.207-1.173-.138-.206-.276-.448-.414-.655-.31-.482-.656-.62-1.206-.31-.242.138-2.415 1.586-4.517 1.586-3.654 0-4.758-2.344-4.758-3.792 0-2.311 1.759-3.655 4.654-4.862 4.655-1.896 7.655-3.654 7.655-7.653 0-3.586-3.414-6.206-7.448-6.206-4.068 0-6.826 2.379-7.274 2.792-.276.242-.621.518-.207 1.173M245.26 43.07c2.654 0 4.137 1.896 4.137 4.31 0 2.482-1.483 4.137-4.137 4.137h-5.62V43.07zm.586-10.998c2.517 0 4.344 1.896 4.344 4.378 0 2.449-2.242 4.241-4.93 4.241h-5.688v-8.619zm-8.792 21.169c0 .345.276.655.655.655h7.551c4.206 0 7.067-2.724 7.067-6.344 0-2.655-1.757-4.585-3.379-5.516 1.828-.758 4.137-2.448 4.137-5.62 0-3.861-3.067-6.654-7.515-6.654h-7.861c-.379 0-.655.31-.655.656zM280.29 37.968c-1.688 3.757-3.344 7.55-5.033 11.308h-.276l-5.034-11.308zm-16.376-7.309l10.48 23.202c.105.207.277.379.587.379h.345c.311 0 .483-.172.586-.379l10.412-23.202c.207-.449-.069-.897-.586-.897h-1.38c-.309 0-.516.207-.586.379l-2.55 5.689h-12.24l-2.516-5.689c-.07-.172-.277-.379-.586-.379h-1.38c-.517 0-.793.448-.586.897M298.7 53.62c0 .345.31.621.654.621h.863l15.547-19.376h.071v18.376c0 .345.274.655.654.655h1.207c.345 0 .654-.31.654-.655V30.038c0-.344-.309-.621-.654-.621h-.621L301.25 49.173h-.033V30.418c0-.345-.277-.655-.656-.655h-1.207c-.344 0-.654.31-.654.655zM334 53.068c0 .448.344.827.827.827h1c.448 0 .827-.379.827-.827v-9.757l10.757 10.239c.138.173.447.345.655.345h1.69c.62 0 .965-.69.413-1.206l-10.895-10.171 11.413-11.687c.241-.242.171-1.069-.586-1.069h-1.759c-.242 0-.552.138-.62.241l-11.068 11.549V30.589c0-.448-.379-.827-.827-.827h-1c-.483 0-.827.379-.827.827zM44.418 79.535V67.556H34.284V10.28H22.306v57.532c.005 6.471 5.248 11.714 11.723 11.723z'
        fill='#2b67af'
      />
    </g>
  </svg>
)

export default FullLogo