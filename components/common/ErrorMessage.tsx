type Props = {
  message: string;
};

export default function ErrorMessage({
  message,
}: Props) {
  return (
    <div className="bg-red-100 border border-red-300 text-red-700 rounded-xl p-4">
      {message}
    </div>
  );
}