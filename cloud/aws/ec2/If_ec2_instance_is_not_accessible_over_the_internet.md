# Checklist

1. Check if Internet Gateway is Attached to the VPC.
2. Route table must point internet traffic to the IGW. (destination: 10.0.0.0/16 local, target: 0.0.0.0/0 IGW)
3. EC2 must have a public or elastic IP.
