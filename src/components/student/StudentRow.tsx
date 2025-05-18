import { Link } from "react-router-dom";
import { FaWhatsapp } from 'react-icons/fa';

interface Props {
  name: string;
  email: string;
  phone: string;
  index: number;
}

const StudentRow = ({ name, email, phone ,index }: Props) => (
  <tr className="border-t">
    <td className="py-2 px-4">{name}</td>
    <td className="py-2 px-4">{email}</td>
    <td className="py-2 px-4">
      <a
        href={`https://wa.me/${phone}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-green-600 hover:underline"
      >
      <FaWhatsapp />
  {phone}
</a>

    </td>
    <td className="py-2 px-4 text-right">
      <Link
        to={`/students/${index}`}
        className="text-blue-600 hover:underline"
      >
        View
      </Link>
    </td>
  </tr>
);

export default StudentRow;
