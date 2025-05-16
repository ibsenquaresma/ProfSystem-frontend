import { Link } from "react-router-dom";

interface Props {
  name: string;
  email: string;
  progress: number;
  index: number;
}

const StudentRow = ({ name, email, progress, index }: Props) => (
  <tr className="border-t">
    <td className="py-2 px-4">{name}</td>
    <td className="py-2 px-4">{email}</td>
    <td className="py-2 px-4">{progress}%</td>
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
