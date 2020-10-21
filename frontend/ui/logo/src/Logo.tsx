import React      from 'react'
import styled     from '@emotion/styled'
import { layout } from 'styled-system'

const Container = styled.div(layout)

const Logo = ({ width, height }) => {
  return (
    <Container width={width} height={height}>
      <svg viewBox='0 0 156 26' fill='none'>
        <path
          d='M42.938 15.097c.57 0 1.032-.482 1.032-1.078 0-.595-.462-1.078-1.032-1.078-.57 0-1.033.483-1.033 1.078 0 .596.463 1.078 1.033 1.078z'
          fill='#fff'
        />
        <path
          d='M51.804 20.154c-1.292 0-3.2.53-4.343 1.622-1.143 1.092-2.634 1.353-3.898.66l9.12-14.282a1.118 1.118 0 000-1.218 1.01 1.01 0 00-1.087-.427L35.39 10.622 27.233.388a1.006 1.006 0 00-1.232-.286 1.006 1.006 0 00-.351.286L17.5 10.612 1.315 6.51a1.006 1.006 0 00-1.088.427 1.119 1.119 0 000 1.218l9.13 14.32c-1.264.64-2.667.404-3.824-.698-1.158-1.101-3.051-1.622-4.403-1.622h-.07a1.08 1.08 0 00.028 2.157 4.983 4.983 0 013.056 1.06c2.315 2.216 5.357 2.128 7.574 0 1.482-1.395 3.32-1.395 4.797 0 2.264 2.16 5.31 2.16 7.575 0 1.481-1.395 3.32-1.395 4.796 0 2.264 2.16 5.31 2.16 7.58 0 1.434-1.372 3.273-1.455 4.8 0 2.357 2.226 5.376 2.095 7.575 0a5.08 5.08 0 012.977-1.06 1.072 1.072 0 001.074-1.079c0-.286-.113-.56-.315-.762a1.072 1.072 0 00-.759-.316h-.014zM26.432 2.763l2.732 3.43 3.982 4.991-3.936 1.004a10.885 10.885 0 01-5.51-.005l-3.949-1.003 6.681-8.417zM40.151 20.33l1.314-2.203a1.11 1.11 0 00-.328-1.488 1.007 1.007 0 00-1.422.344l-1.963 3.286a5.78 5.78 0 00-2.68 1.497c-1.482 1.394-3.32 1.394-4.797 0-2.264-2.161-5.31-2.161-7.574 0-1.172 1.12-2.575 1.348-3.839.692a4.169 4.169 0 01-.958-.692c-2.042-1.948-4.713-2.138-6.88-.576L3.398 9.25l8.39 2.133 11.403 2.9a12.86 12.86 0 006.482 0L49.48 9.251l-7.593 11.898a5.547 5.547 0 00-1.727-.818h-.01zM75.829 16.9l.083-.046a4.175 4.175 0 001.555-1.57 4.196 4.196 0 00.538-2.148c0-2.584-1.94-4.322-4.825-4.322H69.45a1.283 1.283 0 00-1.251.81 1.297 1.297 0 00-.092.519v11.154c0 .35.138.685.384.932a1.31 1.31 0 002.241-.932v-3.769h2.519l3.093 4.406a1.392 1.392 0 001.17.692c.323.004.634-.12.866-.346.232-.225.365-.533.371-.857a1.864 1.864 0 00-.38-1.013L75.83 16.9zm-2.672-1.672h-2.43v-4.109h2.43c1.315 0 2.162.804 2.162 2.045 0 1.24-.824 2.063-2.157 2.063h-.005zM83.051 12.02a1.274 1.274 0 00-1.236.814c-.065.164-.094.34-.088.516v7.929a1.323 1.323 0 00.81 1.217 1.308 1.308 0 001.715-.713c.066-.16.1-.331.1-.504V13.35a1.293 1.293 0 00-.794-1.233 1.28 1.28 0 00-.507-.096zM83.051 6.797a1.6 1.6 0 00-1.133.47 1.611 1.611 0 000 2.275 1.599 1.599 0 002.735-1.137 1.61 1.61 0 00-.469-1.137 1.599 1.599 0 00-1.133-.471zM96.154 12.02a1.21 1.21 0 00-1.167.744l-2.833 5.907-2.857-5.907a1.202 1.202 0 00-1.144-.739 1.284 1.284 0 00-.897.37c-.24.237-.378.557-.385.894.01.25.085.494.218.707l3.856 7.808a1.32 1.32 0 001.209.827 1.325 1.325 0 001.208-.823l3.857-7.803c.12-.218.188-.462.199-.711a1.276 1.276 0 00-1.264-1.274zM104.178 12.02a5.132 5.132 0 00-3.751 1.527 5.163 5.163 0 00-1.49 3.777c0 3.02 2.379 5.303 5.532 5.303a5.736 5.736 0 003.209-.93 1.201 1.201 0 00.666-1.05 1.031 1.031 0 00-.304-.744 1.011 1.011 0 00-.747-.293c-.198.005-.39.066-.555.177a4.11 4.11 0 01-2.181.618c-1.542 0-2.625-.767-2.968-2.105l-.027-.112h5.958a1.306 1.306 0 001.344-.801 1.33 1.33 0 00.101-.547v-.06a4.636 4.636 0 00-1.36-3.428 4.6 4.6 0 00-3.427-1.331zm-2.621 4.35l.028-.106c.106-.598.417-1.14.88-1.533a2.585 2.585 0 011.652-.614 2.16 2.16 0 012.136 1.3c.118.273.179.568.179.865v.093l-4.875-.004zM116.988 12.127a3.233 3.233 0 00-2.444 1.135l-.134.153v-.205a1.254 1.254 0 00-1.26-1.19 1.274 1.274 0 00-.934.386 1.297 1.297 0 00-.367.944v7.929a1.3 1.3 0 001.324 1.348 1.272 1.272 0 001.221-.832 1.28 1.28 0 00.08-.516v-3.955c0-1.613.926-2.645 2.487-2.752a1.234 1.234 0 00.872-.378 1.253 1.253 0 00.35-.886 1.126 1.126 0 00-.331-.861 1.116 1.116 0 00-.864-.32zM128.971 6.695a1.294 1.294 0 00-.95.388 1.317 1.317 0 00-.375.96v5.344l-.152-.167a3.998 3.998 0 00-3.005-1.2c-2.834 0-4.889 2.232-4.889 5.304s2.055 5.303 4.889 5.303a3.904 3.904 0 003.065-1.278l.143-.168v.219c.018.33.161.64.399.869.238.228.555.356.884.358a1.249 1.249 0 00.929-.385 1.26 1.26 0 00.353-.945V8.042a1.287 1.287 0 00-.783-1.248 1.272 1.272 0 00-.508-.1zm-3.959 13.547c-1.588 0-2.741-1.236-2.741-2.937 0-1.7 1.153-2.919 2.741-2.919s2.681 1.209 2.681 2.938-1.079 2.918-2.681 2.918zM138.573 12.02a5.283 5.283 0 00-4.763 3.375 5.3 5.3 0 001.246 5.717 5.263 5.263 0 005.731 1.073 5.28 5.28 0 002.34-1.956 5.305 5.305 0 00-2.493-7.85 5.26 5.26 0 00-2.061-.358zm0 8.18a2.698 2.698 0 01-1.993-.84 2.73 2.73 0 01-.748-2.036c0-1.692 1.153-2.92 2.741-2.92a2.766 2.766 0 011.987.877 2.78 2.78 0 01.754 2.043 2.754 2.754 0 01-1.663 2.655 2.737 2.737 0 01-1.078.221zM154.847 18.746a1.067 1.067 0 00-.889.409 2.927 2.927 0 01-2.222 1.069c-1.639 0-2.778-1.2-2.778-2.919a2.767 2.767 0 01.761-2.056 2.745 2.745 0 012.017-.844 2.817 2.817 0 012.222 1.074 1.051 1.051 0 00.885.404c.307 0 .601-.122.818-.34.217-.218.339-.514.339-.822a1.264 1.264 0 00-.236-.702 4.909 4.909 0 00-4.074-1.998 5.274 5.274 0 00-3.736 1.553 5.312 5.312 0 00-1.547 3.75c0 1.406.556 2.755 1.547 3.75a5.274 5.274 0 003.736 1.553 4.727 4.727 0 004.092-2.064c.14-.191.215-.423.213-.66a1.162 1.162 0 00-1.148-1.157z'
          fill='#fff'
        />
      </svg>
    </Container>
  )
}

export default Logo
