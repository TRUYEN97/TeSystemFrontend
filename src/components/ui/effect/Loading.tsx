const Loading = () => {
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
      </div>
    </div>
  )
}

export default Loading;