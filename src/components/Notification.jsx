import React from 'react'

function Notification() {
    const notifications = [
        {
          image: 'https://i.pinimg.com/564x/48/49/ba/4849ba2ea6517f805785071120cccc08.jpg', // Replace with your image URL
          title: 'Notification 1',
          subtitle: 'This is the subtitle for notification 1',
          time: '10:00 AM',
        },
        {
          image: 'https://i.pinimg.com/564x/48/49/ba/4849ba2ea6517f805785071120cccc08.jpg', // Replace with your image URL
          title: 'Notification 2',
          subtitle: 'This is the subtitle for notification 2',
          time: '10:30 AM',
        },
        {
          image: 'https://i.pinimg.com/564x/48/49/ba/4849ba2ea6517f805785071120cccc08.jpg', // Replace with your image URL
          title: 'Notification 3',
          subtitle: 'This is the subtitle for notification 3',
          time: '11:00 AM',
        },
        // Add more notifications here
      ];
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          
          <div className="ml-5">
            <h1 className='dark:text-green-200'>Notification</h1>
          </div>
        </div>
      </div>
      <hr className='my-5' />
      <div>
        {notifications.map((notification, index) => (
          <div key={index} className="my-2 p-2 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
            <img src={notification.image} alt="notification" className="w-10 h-10 rounded-full" />
            <div className="ml-3">
              <p className="font-bold dark:text-green-200">{notification.title}</p>
              <p className="text-sm dark:text-gray-300">{notification.subtitle}</p>
            </div>
            <div className="ml-auto text-sm text-gray-500 dark:text-gray-400">
              {notification.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Notification
