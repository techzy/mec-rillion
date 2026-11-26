import Link from "next/link";

export default function NotFound() {
  return (
    <div className="center" style={{ paddingTop: 60 }}>
      <p className="display" style={{ fontSize: 40 }}>DRAWING NOT FOUND</p>
      <p className="muted">That sheet isn&apos;t in the flat file.</p>
      <Link className="btn" href="/">TODAY&apos;S SHEET</Link>
    </div>
  );
}
