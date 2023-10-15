import type { ComponentChildren } from 'preact';
import { useStore } from '@nanostores/preact';
import { isNotificationShown } from '../../stores/appStore';
import './style.css'

interface Props {
  type?: 'info' | 'success' | 'warning' | 'error' | 'default'
  role?: 'none' | 'alert' | 'log' | 'marquee' | 'status' | 'timer' | 'region'
  ariaLive?: 'off' | 'polite' | 'assertive'
  children?: ComponentChildren
}

const Notification = (props: Props) => {
  const $isNotificationShown = useStore(isNotificationShown)
  const { type = 'default', role = 'log', ariaLive = 'polite', children } = props

  if ($isNotificationShown) {
    console.log('setting to false')
    setTimeout(() => {
      isNotificationShown.set(false)
    }, 4000)
  }

  return (
    <aside hidden={!$isNotificationShown}>
      <div
        id='notification'
        class={`notification type-${type}`}
        role={role}
        aria-live={ariaLive}
      >
        {children || (
          <p>
            <strong>Message:</strong> This is a notification!
          </p>
        )}
      </div>
    </aside>
  )
}

export default Notification
